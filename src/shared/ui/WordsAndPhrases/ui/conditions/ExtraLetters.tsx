import { FC, ReactNode } from 'react'
import { StarPosition } from '../../types/types'

interface ExtraLettersProps {
  children: ReactNode
  starPosition: ReactNode
}

export const ExtraLetters: FC<ExtraLettersProps> = ({ children, starPosition }) => (
  <div className='words-and-phrases__wrapper words-and-phrases__wrapper--extra-letters'>
    {starPosition === StarPosition.LEFT && '*'}
    {starPosition === StarPosition.BOTH && '*'}
    <div className='words-and-phrases__child'>{children}</div>
    {starPosition === StarPosition.RIGHT && '*'}
    {starPosition === StarPosition.BOTH && '*'}
  </div>
)
