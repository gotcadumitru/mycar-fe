import { FC, PropsWithChildren, Suspense } from 'react'
import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'
import './authPage.scss'

const BlackCar = lazyWithPreload(() => import('shared/assets/lottie/BlackCar/BlackCar'))

const AuthPage: FC<PropsWithChildren> = ({ children }) => (
  <div className='auth-page'>
    <div className='auth-page__image-container'>
      <Suspense>
        <BlackCar />
      </Suspense>
    </div>
    <div className='auth-page__form'>{children}</div>
  </div>
)
export default AuthPage
