import { useAuth } from 'app/providers/AuthContextProvider'
import { softDeleteVehicleById } from 'enteties/vehicle'
import { FC, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MdOutlineDelete from 'shared/assets/icons/MdOutlineDelete.svg'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonTheme } from 'shared/ui/Button'
import { ConfirmModal } from 'widgets/ConfirmModal'
import '../../styles/deleteVehicleButton.scss'

type DeleteVehicleButtonProps = {
  vehicleId: string
}
const DeleteVehicleButton: FC<DeleteVehicleButtonProps> = ({ vehicleId }) => {
  const [isConfirmModalShow, setIsConfirmModalShow] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const onConfirmDelete = async () => {
    if (!currentUser) return
    setIsConfirmModalShow(false)
    const deleteThunk = await dispatch(
      softDeleteVehicleById({
        vehicleId,
        userId: currentUser.uid,
        notification: REQUEST_MESSAGES.DELETE_VEHICLE,
      }),
    )
    if (deleteThunk.meta.requestStatus === 'fulfilled') {
      navigate(RoutePathsFn.getGarage())
    }
  }

  return (
    <>
      <ConfirmModal
        title='Stegre vehicul'
        questionText='Esti sigur ca doresti sa stergi acest vehicul?'
        onConfirm={onConfirmDelete}
        onClose={() => setIsConfirmModalShow(false)}
        isOpen={isConfirmModalShow}
      />
      <Button
        data-testid='delete-vehicle-button'
        onClick={() => setIsConfirmModalShow(true)}
        theme={ButtonTheme.EMPTY}
      >
        <MdOutlineDelete className='delete-vehicle-button__icon' />
      </Button>
    </>
  )
}
export default memo(DeleteVehicleButton)
