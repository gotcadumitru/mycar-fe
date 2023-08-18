import { FC, ReactNode } from 'react'

interface AndProps {
  childrenLeft: ReactNode
  childrenRight: ReactNode
}

export const And: FC<AndProps> = ({ childrenLeft, childrenRight }) => (
  <div className='words-and-phrases__wrapper'>
    <div className='words-and-phrases__child'>{childrenLeft}</div>
    <div className='words-and-phrases__and-text'>AND</div>
    <div className='words-and-phrases__child'>{childrenRight}</div>
  </div>
)
