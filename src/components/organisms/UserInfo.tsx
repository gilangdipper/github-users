import { FC } from 'react'
import { redirect } from 'react-router-dom'
import styled from 'styled-components'

import useGetUsers from '../../hooks/useGetUserDetails'
import UserInfoDetails from '../molecules/userInfo/UserInfoDetails'
import UserInfoBanner from '../molecules/userInfo/UserInfoBanner'

const UserInfoWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9dde0;
  border-radius: 16px;
  overflow: hidden;
`

const UserInfo: FC<{ userName: string }> = ({ userName }) => {
  const { data: person, isLoading, isError } = useGetUsers(userName)
  if (!person || isError) {
    redirect('/error')
    return null
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <UserInfoWrapper>
      <UserInfoBanner
        avatar_url={person.avatar_url}
        name={person.name}
        bio={person.bio}
      />
      <UserInfoDetails location={person.location} company={person.company} />
    </UserInfoWrapper>
  )
}

export default UserInfo
