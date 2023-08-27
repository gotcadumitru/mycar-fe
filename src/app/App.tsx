import { Analytics } from '@vercel/analytics/react'

import AppRouter from 'app/providers/router'
import { ToastContainer } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'
import './styles/app.scss'

const App = () => {
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   ;(async () => {
  //     const vehicleTypesResp = await axios.get(
  //       'https://app.my-car.site/backend/api/v1/vehicles/dropdown/vehicleTypes',
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //         },
  //       },
  //     )
  //
  //     const data = []
  //
  //     for (let i = 0; i < vehicleTypesResp.data.length; i += 1) {
  //       const vehicleType = vehicleTypesResp.data[i]
  //       const tireSizesResp = await axios.get(
  //         `https://app.my-car.site/backend/api/v1/vehicles/dropdown/tireSizes/${vehicleType.id}`,
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //           },
  //         },
  //       )
  //       const vehicleBrandsResp = await axios.get(
  //         `https://app.my-car.site/backend/api/v1/vehicle-brands/${vehicleType.id}`,
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //           },
  //         },
  //       )
  //       for (let j = 0; j < vehicleBrandsResp.data.length; j += 1) {
  //         const vehicleBrand = vehicleBrandsResp.data[j]
  //         const vehicleModelsResp = await axios.get(
  //           `https://app.my-car.site/backend/api/v1/vehicle-models/dropdown/vehicleModelList?vehicleTypeId=${vehicleType.id}&brandId=${vehicleBrand.id}`,
  //           {
  //             headers: {
  //               Authorization:
  //                 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //             },
  //           },
  //         )
  //         vehicleBrand.vehicleModels = vehicleModelsResp.data
  //         await new Promise((resolve) => {
  //           setTimeout(resolve, 500)
  //         })
  //       }
  //
  //       data.push({
  //         tyreSize: tireSizesResp.data,
  //         vehicleBrands: vehicleBrandsResp.data,
  //         ...vehicleType,
  //       })
  //     }
  //     debugger
  //
  //     // setOptions(
  //     //   resp.data.Results.map((r: any) => ({
  //     //     value: r.Make_ID,
  //     //     label: r.Make_Name,
  //     //   })),
  //     // )
  //   })()
  // }, [])
  return (
    <>
      <div className='app' data-testid='app'>
        <ActiveModal />
        {/*<div style={{ fontSize: '50px' }}>*/}
        {/*  <BsPlusLg />*/}
        {/*  <BsSpeedometer2/>*/}
        {/*  <HiOutlineBellAlert />*/}
        {/*  <GiHomeGarage/>*/}
        {/*  <BiMenuAltRight/>*/}
        {/*  <AiOutlineLeft/>*/}
        {/*</div>*/}
        <AppRouter />
      </div>
      <ToastContainer position='bottom-center' {...toastDefaultValues} />
      <Analytics />
    </>
  )
}
export default App
