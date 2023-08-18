import { uiActions } from 'app/providers/StoreProvider/slices/ui'
import classNames from 'classnames'
import { FC, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import useOnClickOutside from 'shared/lib/hooks/useOnClickOutside'
import { SIDEBAR_BURGER_CLASS } from '../../lib/sidebar.defaults'
import type { SidebarPropsType } from '../../lib/sidebar.types'
import '../../styles/sidebar.scss'

const Sidebar: FC<SidebarPropsType> = ({ className }) => {
  const isSidebarShow = useAppSelector((state) => state.ui.isSidebarShow)
  const dispatch = useAppDispatch()
  const sidebarRef = useRef<HTMLDivElement>(null)

  const onClickOutsideSidebar = () => {
    if (isSidebarShow) dispatch(uiActions.setIsSidebarShowAC(false))
  }
  useOnClickOutside(sidebarRef, onClickOutsideSidebar, [SIDEBAR_BURGER_CLASS])
  const getNavLinkClassName = (isActive: boolean) =>
    classNames('sidebar__option', { 'sidebar__option--active': isActive })

  const sidebarClassName = classNames('sidebar', className, {
    'sidebar--open': isSidebarShow,
  })

  return (
    <div ref={sidebarRef} className={sidebarClassName}>
      <div className='sidebar__group'>
        <div className='sidebar__title'>Categories</div>
        <NavLink
          to={RoutePaths.category}
          className={({ isActive }) => getNavLinkClassName(isActive)}
        >
          Category Manager
        </NavLink>
      </div>
      {/* do not remove*/}
      {/*<div className='sidebar__group'>*/}
      {/*  <div className='sidebar__title'>Dictionaries</div>*/}
      {/*  <NavLink*/}
      {/*    to={RoutePaths.dictionary}*/}
      {/*    className={({ isActive }) => getNavLinkClassName(isActive)}*/}
      {/*  >*/}
      {/*    Dictionary Manager*/}
      {/*  </NavLink>*/}
      {/*</div>*/}
    </div>
  )
}
export default Sidebar
