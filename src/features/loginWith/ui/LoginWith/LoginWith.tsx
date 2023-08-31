import { useAuth } from 'app/providers/AuthContextProvider'
import { FC, memo } from 'react'
import FaFacebook from 'shared/assets/icons/FaFacebook.svg'
import FcGoogle from 'shared/assets/icons/FcGoogle.svg'
import Button, { ButtonTheme } from 'shared/ui/Button'

const LoginWith: FC = () => {
  const { signInWithGoogle } = useAuth()

  return (
    <>
      <Button
        type='button'
        theme={ButtonTheme.OUTLINE_BLUE}
        icon={<FaFacebook className='auth-page__facebook' />}
      >
        Login with
      </Button>
      <Button
        type='button'
        onClick={signInWithGoogle}
        theme={ButtonTheme.OUTLINE_RED}
        icon={<FcGoogle className='auth-page__google' />}
      >
        Login with
      </Button>
    </>
  )
}
export default memo(LoginWith)
