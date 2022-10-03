import { FC } from 'react'
import styled from 'styled-components'

import HomeBanner from '../molecules/home/HomeBanner'
import UserNameList from '../molecules/home/UserNameList'

const HomeDetailsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9dde0;
  border-radius: 16px;

  > .text-component {
    &:nth-child(1) {
      margin-bottom: 4px;
    }
    &:nth-child(2) {
      margin-bottom: 14px;
    }
  }
`

const HomeDetails: FC<{ list: string[] }> = ({ list }) => {
  return (
    <HomeDetailsWrapper>
      <HomeBanner numberOfUsers={list.length} />
      <UserNameList list={list} />
    </HomeDetailsWrapper>
  )
}

export default HomeDetails
