import classNames from 'classnames'
import Button from 'shared/ui/Button'
import './errorPage.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    global.location.reload()
  }

  return (
    <div className={classNames('error-page', className)}>
      <p>Uh epta iaca la asta nu m-am asteptat</p>
      <Button onClick={reloadPage}>Reancarca pagina ca hz ce sa intamplat</Button>
      buguri...ce s-ai faci
    </div>
  )
}
