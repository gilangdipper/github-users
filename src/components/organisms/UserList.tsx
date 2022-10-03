import { FC } from 'react'
import styled from 'styled-components'

const UserListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #d9dde0;
  border-radius: 16px;

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .sub-title {
    font-size: 14px;
    margin-bottom: 14px;
  }

  .list {
    display: flex;
    flex-flow: row wrap;

    .item {
      padding: 4px 8px;
      background: #f2f2f2;
      margin: 2px 4px;
      border-radius: 10px;
      border: 1px solid #d9dde0;
    }
  }
`

type TUserList = {
  list: string[]
}

const UserList: FC<TUserList> = ({ list }) => {
  return (
    <UserListWrapper>
      <div className="title">Top 5 Github Users</div>
      <div className="sub-title">Tap the username to see more information</div>
      <div className="list">
        {list.map((item, index) => {
          const key = `${item}${index}`
          return (
            <div key={key} className="item">
              {item}
            </div>
          )
        })}
      </div>
    </UserListWrapper>
  )
}

export default UserList
