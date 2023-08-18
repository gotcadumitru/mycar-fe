import { FC, ReactNode } from 'react'

interface ExtraWordsProps {
  children: ReactNode
  noOfWords: number
}

export const ExtraWords: FC<ExtraWordsProps> = ({ children, noOfWords }) => (
  <div className='words-and-phrases__wrapper'>
    <div className='words-and-phrases__child'>{children}</div>
    <div className='words-and-phrases__extra-words-text'>/</div>
    <div className='words-and-phrases__child'>{noOfWords}</div>
  </div>
)
