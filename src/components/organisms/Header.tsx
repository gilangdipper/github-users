import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Text from '../atoms/Text'

const HeadersWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;

  .back-wrapper {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-right: 8px;

    button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid #d9dde0;
      font-size: 22px;
      background: #fff;
      padding: 0;
    }
  }

  .main-wrapper {
    flex: 1 1 auto;
    padding: 8px 12px;
    background: #fff;
    border: 1px solid #d9dde0;
    border-radius: 16px;
  }
`

const Headers: FC<{ title: string; hasBack?: boolean }> = ({
  title,
  hasBack,
}) => {
  const navigate = useNavigate()
  return (
    <HeadersWrapper>
      {hasBack && (
        <div className="back-wrapper">
          <button type="button" onClick={() => navigate('/')}>
            &#10094;
          </button>
        </div>
      )}
      <div className="main-wrapper">
        <Text fontSize={16} fontWeight="700">
          {title}
        </Text>
      </div>
    </HeadersWrapper>
  )
}

Headers.defaultProps = {
  hasBack: false,
}

export default Headers
