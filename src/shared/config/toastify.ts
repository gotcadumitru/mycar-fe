import { ToastContainerProps } from 'react-toastify/dist/types'

export const TOAST_AUTO_CLOSE = 5000
export const toastDefaultValues: ToastContainerProps = {
  autoClose: TOAST_AUTO_CLOSE,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  closeButton: true,
  draggable: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
}
