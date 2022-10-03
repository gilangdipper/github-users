import { FC } from 'react'
import styled from 'styled-components'

import Text from '../../atoms/Text'

import { TUserResponse } from '../../../types'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #d9dde0;

  .field {
    display: flex;
    margin-bottom: 8px;
  }
`

const UserInfoBody: FC<Pick<TUserResponse, 'location' | 'company'>> = ({
  location,
  company,
}) => {
  if (!location && !company) return null
  return (
    <Wrapper>
      {location && (
        <div className="field">
          <Text color="#818588">Location:&nbsp;</Text>
          <Text>{location}</Text>
        </div>
      )}

      {company && (
        <div className="field">
          <Text color="#818588">Company:&nbsp;</Text>
          <Text>{company}</Text>
        </div>
      )}
    </Wrapper>
  )
}

export default UserInfoBody
