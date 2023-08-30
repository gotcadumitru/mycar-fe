import { FC, useId } from 'react'
import Button from 'shared/ui/Button'
import Form from 'shared/ui/Form'

interface SignInProps {
  className?: string
}

export const SignIn: FC<SignInProps> = ({ className }) => {
  const formId = useId()
  const onSubmit = () => {}
  return (
    <Form id={formId} onSubmit={onSubmit} className={className}>
      SIGN_IN
      <div className='auth__footer'>
        <Button type='submit'>Autentificare</Button>
      </div>
    </Form>
  )
}
