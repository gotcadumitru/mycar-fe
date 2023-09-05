import { getFetchStatus, selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchTyreSizesFroVehicleTypeIdThunk } from 'enteties/tyre'
import { Vehicle } from 'enteties/vehicle'
import { VehicleWithFiles } from 'enteties/vehicle/model/types/vehicleTypes'
import { fetchVehicleBrandsFroVehicleTypeIdThunk } from 'enteties/vehicleBrand'
import {
  fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk,
  getIdFromVehicleTypeAndModel,
} from 'enteties/vehicleModel'
import { fetchAllVehicleTypesThunk, VehicleTypeActions } from 'enteties/vehicleType'
import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'

export const useVehicleWithDetails = (vehicle: Vehicle | VehicleWithFiles) => {
  const dispatch = useAppDispatch()
  const vehicleTypes = useAppSelector((state) => state.vehicleType.vehicleTypes)
  const vehicleTypesFetchStatus = useAppSelector(
    selectRequestStatus(VehicleTypeActions.FETCH_ALL_VEHICLE_TYPES),
  )
  const vehicleBrands = useAppSelector((state) => state.vehicleBrand.vehicleBrands)
  const vehicleBrandsFetchStatus = useAppSelector((state) =>
    getFetchStatus(state.vehicleBrand.vehicleBrandsWithFetchStatus[vehicle.type!]?.fetchStatus),
  )

  const vehicleModels = useAppSelector((state) => state.vehicleModel.vehicleModels)
  const vehicleModelsFetchStatus = useAppSelector((state) =>
    getFetchStatus(
      state.vehicleModel.vehicleModelsWithFetchStatus[
        getIdFromVehicleTypeAndModel({
          vehicleTypeId: vehicle.type!,
          vehicleBrandId: vehicle.brand!,
        })
      ]?.fetchStatus,
    ),
  )

  const tyreSizes = useAppSelector((state) => state.tyre.tyreSizes)
  const vehicleTyreSizesFetchStatus = useAppSelector((state) =>
    getFetchStatus(state.tyre.tyreSizesWithFetchStatus[vehicle.type!]?.fetchStatus),
  )
  const vehicleTyreSizesForType = useMemo(
    () => tyreSizes.find((tyreSize) => tyreSize.id === vehicle.type),
    [tyreSizes, vehicle.type],
  )
  const vehicleBrandForType = useMemo(
    () => vehicleBrands.find((brand) => brand.id === vehicle.type),
    [vehicle.type, vehicleBrands],
  )
  const vehicleModelsForTypeAndBrand = useMemo(
    () =>
      vehicleModels.find(
        (brand) => brand.vehicleTypeId === vehicle.type && brand.vehicleBrandId === vehicle.brand,
      ),
    [vehicle.type, vehicle.brand, vehicleModels],
  )

  useEffect(() => {
    dispatch(fetchAllVehicleTypesThunk())
    if (vehicle.type) dispatch(fetchVehicleBrandsFroVehicleTypeIdThunk(vehicle.type))
    if (vehicle.type) dispatch(fetchTyreSizesFroVehicleTypeIdThunk(vehicle.type))
    if (vehicle.type && vehicle.brand)
      dispatch(
        fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk({
          vehicleTypeId: vehicle.type,
          vehicleBrandId: vehicle.brand,
        }),
      )
  }, [])
  return useMemo(
    () => ({
      vehicleType: vehicleTypes.find((type) => type.id === vehicle.type),
      vehicleTypesFetchStatus,
      vehicleBrand: vehicleBrandForType?.brands.find((brand) => brand.id === vehicle.brand),
      vehicleBrandsFetchStatus,
      summerTyreSize: vehicleTyreSizesForType?.sizes.find(
        (brand) => brand.id === vehicle.summerTyreSize,
      ),
      winterTyreSize: vehicleTyreSizesForType?.sizes.find(
        (brand) => brand.id === vehicle.winterTyreSize,
      ),
      vehicleTyreSizesFetchStatus,
      vehicleModel: vehicleModelsForTypeAndBrand?.models.find(
        (model) => model.id === vehicle.model,
      ),
      vehicleModelsFetchStatus,
    }),
    [
      vehicleTypes,
      vehicleTypesFetchStatus,
      vehicleBrandForType,
      vehicleBrandsFetchStatus,
      vehicleTyreSizesForType,
      vehicleTyreSizesFetchStatus,
      vehicleModelsForTypeAndBrand,
      vehicleModelsFetchStatus,
    ],
  )
}
