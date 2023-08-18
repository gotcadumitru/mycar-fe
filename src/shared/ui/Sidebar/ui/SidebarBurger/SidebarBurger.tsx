import { uiActions } from 'app/providers/StoreProvider/slices/ui'
import type { FC } from 'react'
import VscChromeClose from 'shared/assets/icons/VscChromeClose.svg'
import VscMenu from 'shared/assets/icons/VscMenu.svg'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import useWindowSize from 'shared/lib/hooks/useWindowSize'
import Button from 'shared/ui/Button'
import { SIDEBAR_BURGER_CLASS } from '../../lib/sidebar.defaults'
import '../../styles/sidebar-burger.scss'
import { SIDEBAR_OPEN_WIDTH } from '../consts/sidebarConsts'

export const SidebarBurger: FC = () => {
  const { width } = useWindowSize()
  const isSidebarShow = useAppSelector((state) => state.ui.isSidebarShow)
  const dispatch = useAppDispatch()

  if (width >= SIDEBAR_OPEN_WIDTH) return null
  const onSidebarClick = () => {
    dispatch(uiActions.setIsSidebarShowAC(!isSidebarShow))
  }

  return (
    <Button className={SIDEBAR_BURGER_CLASS} onClick={onSidebarClick}>
      {isSidebarShow ? <VscChromeClose /> : <VscMenu />}
    </Button>
  )
}
