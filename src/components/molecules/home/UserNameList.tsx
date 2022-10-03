import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Label from '../../atoms/Label'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  > a {
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
  }
`

const UserNameList: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item, index) => {
        const key = `${item}${index}`
        return (
          <Link key={key} to={`/user/${item}`}>
            <Label>{item}</Label>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default UserNameList
