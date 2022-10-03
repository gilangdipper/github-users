import { FC } from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'

const HeadersWrapper = styled.div`
  width: 100%;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9dde0;
  border-radius: 16px;
  margin-bottom: 20px;
`

const Headers: FC<{ title: string }> = ({ title }) => {
  return (
    <HeadersWrapper>
      <Text fontSize={16} fontWeight="700">
        {title}
      </Text>
    </HeadersWrapper>
  )
}

export default Headers
