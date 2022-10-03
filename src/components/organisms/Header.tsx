import { FC } from 'react'
import styled from 'styled-components'

const HeadersWrapper = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9dde0;
  border-radius: 16px;
`

const Headers: FC<{ title: string }> = ({ title }) => {
  return <HeadersWrapper>{title}</HeadersWrapper>
}

export default Headers
