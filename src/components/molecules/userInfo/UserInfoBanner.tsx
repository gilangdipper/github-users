import { FC } from 'react'
import styled from 'styled-components'

import getColorFromString from '../../../helpers/getColorFromString'
import { TUserResponse } from '../../../types'

import Text from '../../atoms/Text'

const Wrapper = styled.div<{
  backDropTopColor: string
  backDropBottomColor: string
}>`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;

  .backDrop {
    background: #2c3e50;
    background: linear-gradient(
      to bottom,
      ${({ backDropTopColor }) => backDropTopColor},
      ${({ backDropBottomColor }) => backDropBottomColor}
    );
    height: 100px;
    margin: -8px -12px 0;
  }

  .avatar {
    width: 108px;
    height: 108px;
    border-radius: 50%;
    background: #fff;
    margin: -50px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border-top: 1px solid #d9dde0;
    }
  }
`

const UserInfoHeader: FC<
  Pick<TUserResponse, 'avatar_url' | 'name' | 'bio'>
> = ({ avatar_url, name, bio }) => {
  const backDropTopColor = getColorFromString(name)
  const backDropBottomColor = getColorFromString(bio || 'string')

  return (
    <Wrapper
      backDropTopColor={backDropTopColor}
      backDropBottomColor={backDropBottomColor}
    >
      <div className="backDrop" />
      <div className="avatar">
        <img alt="person" src={avatar_url} />
      </div>
      <Text fontSize={18} fontWeight="700">
        {name}
      </Text>
      <Text fontSize={12} fontWeight="500">
        {bio}
      </Text>
    </Wrapper>
  )
}

export default UserInfoHeader
