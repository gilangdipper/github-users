import { FC } from 'react'
import styled from 'styled-components'
import getColorFromString from '../../helpers/getColorFromString'

const Wrapper = styled.div<{ borderColor: string }>`
  padding: 4px 8px;
  background: #d9dde0;
  margin: 2px 4px;
  border-radius: 6px;
  border: 1px solid #d9dde0;
  border-right: 6px solid ${({ borderColor }) => borderColor};
`

const Label: FC<{ children: string }> = ({ children }) => {
  const borderColor = getColorFromString(children)
  return <Wrapper borderColor={borderColor}>{children}</Wrapper>
}

export default Label
