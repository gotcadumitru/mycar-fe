import { useAuth } from 'app/providers/AuthContextProvider'
import { FC, memo, useState } from 'react'
import Button, { ButtonTheme } from 'shared/ui/Button'
import { ConfirmModal } from 'widgets/ConfirmModal'

const LogOutButton: FC = () => {
  const [isConfirmModalShow, setIsConfirmModalShow] = useState(false)
  const { logout } = useAuth()

  const onConfirmLogOut = async () => {
    setIsConfirmModalShow(false)
    await logout()
  }

  return (
    <>
      <ConfirmModal
        title='Log out'
        questionText='Esti sigur ca doresti sa iesi din cont?'
        onConfirm={onConfirmLogOut}
        onClose={() => setIsConfirmModalShow(false)}
        isOpen={isConfirmModalShow}
      />
      <Button onClick={() => setIsConfirmModalShow(true)} theme={ButtonTheme.OUTLINE_RED}>
        Log out
      </Button>
    </>
  )
}
export default memo(LogOutButton)
