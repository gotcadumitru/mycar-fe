import { FC, ReactNode } from 'react'

interface OrProps {
  childrenLeft: ReactNode
  childrenRight: ReactNode
}

export const Or: FC<OrProps> = ({ childrenLeft, childrenRight }) => (
  <div className='words-and-phrases__wrapper'>
    <div className='words-and-phrases__child'>{childrenLeft}</div>
    <div className='words-and-phrases__or-text'>OR</div>
    <div className='words-and-phrases__child'>{childrenRight}</div>
  </div>
)
