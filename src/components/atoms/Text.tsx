import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type TStyle = {
  fontSize?: number
  fontWeight?: '700' | '500' | 'normal'
  color?: string | 'inherit'
}

const TextWrapper = styled.div<TStyle>`
  display: block;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};

  span {
    color: #d9dde0;
  }
`

type TText = {
  children: ReactNode
} & TStyle

const Text: FC<TText> = ({ children, fontSize, fontWeight, color }) => {
  return (
    <TextWrapper
      className="text-component"
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </TextWrapper>
  )
}

Text.defaultProps = {
  fontSize: 12,
  fontWeight: 'normal',
  color: 'inherit',
}

export default Text
