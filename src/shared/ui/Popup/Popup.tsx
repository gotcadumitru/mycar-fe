import { createPopper, Instance } from '@popperjs/core'
import { FC, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'
import HiOutlineDuplicate from 'shared/assets/icons/HiOutlineDuplicate.svg'
import { BUTTON_TEXT, TOAST_MESSAGE } from 'shared/defaults/text'
import Button, { ButtonTheme } from 'shared/ui/Button'
import './popup.scss'
import type { PopupPropsType } from './popup.types'

const Popup: FC<PopupPropsType> = ({
  referenceElement,
  referenceElementClassName = 'popup__reference-element',
  popupElement,
  popupElementClassName = 'popup__info-container',
  placement = 'auto',
  isEnabled = true,
  isWithCopyButton,
}) => {
  const referenceElementRef = useRef<HTMLDivElement>(null)
  const popupElementRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<Instance | null>(null)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (referenceElementRef.current && popupElementRef.current) {
      popupRef.current = createPopper(referenceElementRef.current, popupElementRef.current, {
        placement,
      })
    }
  }, [placement])

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.update()
    }
  }, [isShow])

  const changeIsShowPopup = (newStatus: boolean) => {
    setIsShow(isEnabled ? newStatus : false)
  }
  const onCopyClick = async () => {
    if (popupElementRef.current) {
      try {
        await navigator.clipboard.writeText(popupElementRef.current.innerText)
        toast.success(TOAST_MESSAGE.COPIED_SUCCESSFULLY)
      } catch (err) {
        toast.error(TOAST_MESSAGE.COULD_NOT_COPY)
      }
    }
  }
  return (
    <>
      <div
        ref={referenceElementRef}
        className={referenceElementClassName}
        onMouseEnter={() => changeIsShowPopup(true)}
        onMouseLeave={() => changeIsShowPopup(false)}
      >
        {referenceElement}
      </div>

      <CSSTransition in={isShow} classNames='popupanimation' addEndListener={() => {}}>
        <div
          onMouseEnter={() => changeIsShowPopup(true)}
          onMouseLeave={() => changeIsShowPopup(false)}
          ref={popupElementRef}
          className={popupElementClassName}
          style={{ display: isShow ? 'block' : 'none' }}
        >
          {popupElement}
          {isWithCopyButton && (
            <Button
              onClick={onCopyClick}
              theme={ButtonTheme.EMPTY}
              title={BUTTON_TEXT.COPY_TO_CLIPBOARD}
            >
              <HiOutlineDuplicate className='popup__copy-icon' />
            </Button>
          )}
        </div>
      </CSSTransition>
    </>
  )
}
export default Popup
