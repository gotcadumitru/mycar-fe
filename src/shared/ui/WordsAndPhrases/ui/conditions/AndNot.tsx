import { FC, ReactNode } from 'react'

interface AndNotProps {
  childrenLeft: ReactNode
  childrenRight: ReactNode
}

export const AndNot: FC<AndNotProps> = ({ childrenLeft, childrenRight }) => (
  <div className='words-and-phrases__wrapper'>
    <div className='words-and-phrases__child'>{childrenLeft}</div>
    <div className='words-and-phrases__and-not-text'>AND NOT</div>
    <div className='words-and-phrases__child'>{childrenRight}</div>
  </div>
)
