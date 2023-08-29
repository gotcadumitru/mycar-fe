export const populate = () => {
  /////////1 ->>>>
  // const response = await thunkApi.extra.carAPI.get<VehicleWithDetailsType[]>(`/vehicles`)
  // for (let i = 0; i < response.data.length; i += 1) {
  //   const vehicle = response.data[i]
  //   const r3 = await kv.json.set(
  //     `vehicleBrands_${vehicle.id}`,
  //     '$',
  //     JSON.stringify(
  //       vehicle.vehicleBrands.map((br) => ({
  //         id: br.id,
  //         name: br.name,
  //       })),
  //     ),
  //   )
  //
  //   for (let j = 0; j < vehicle.vehicleBrands.length; j += 1) {
  //     const br = vehicle.vehicleBrands[j]
  //
  //     const r3 = await kv.json.set(
  //       `vehicleBrands_${vehicle.id}_model_${br.id}`,
  //       '$',
  //       JSON.stringify(br.vehicleModels),
  //     )
  //   }
  //
  //   const r4 = await kv.json.set(`tyreSize_${vehicle.id}`, '$', JSON.stringify(vehicle.tyreSize))
  // }
  // const response2: VehicleWithDetailsType[] = await kv.json.get('tyreSize_1')
  // const response3: VehicleWithDetailsType[] = await kv.json.get('vehicleBrands_1')
  // const response4: VehicleWithDetailsType[] = await kv.json.get('vehicleBrands_1_model_147')
  /////////1 -<<<<

  debugger
}
