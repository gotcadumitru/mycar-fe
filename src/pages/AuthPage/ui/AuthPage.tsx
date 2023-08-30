import { FC, PropsWithChildren } from 'react'
import './authPage.scss'

const AuthPage: FC<PropsWithChildren> = ({ children }) => (
  <div className='auth-page'>
    <div className='auth-page__image-container'>IMG</div>
    <div className='auth-page__form'>{children}</div>
  </div>
)
export default AuthPage
