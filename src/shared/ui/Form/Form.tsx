import { FormEvent, forwardRef } from 'react'
import type { FormPropsType } from './form.types'
import './form.scss'

const Form = forwardRef<HTMLFormElement, FormPropsType>(({ onSubmit, children, ...props }, ref) => {
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }
  return (
    <form className='form' onSubmit={onSubmitForm} ref={ref} {...props}>
      {children}
    </form>
  )
})
Form.displayName = 'Form'
export default Form
