import { FC, ReactNode } from 'react'
import '../styles/toolbar.scss'

interface ToolbarProps {
  left: ReactNode
  right: ReactNode
}

const Toolbar: FC<ToolbarProps> = ({ left, right }) => (
  <div className='content-container'>
    <div className='toolbar'>
      <div className='toolbar__left-side'>{left}</div>
      {right}
    </div>
  </div>
)

export default Toolbar
