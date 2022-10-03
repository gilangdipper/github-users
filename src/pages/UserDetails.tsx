import { redirect, useParams } from 'react-router-dom'
import Headers from '../components/organisms/Header'
import UserInfo from '../components/organisms/UserInfo'
import { MainContainer } from './common/styles'

const UserDetails = () => {
  const { userName } = useParams<{ userName: string }>()
  if (!userName) {
    redirect('/error')
    return null
  }

  return (
    <MainContainer data-testid="main-container">
      <div className="main-content" data-testid="main-container-main-content">
        <Headers title="Person" hasBack />
        <UserInfo userName={userName} />
      </div>
    </MainContainer>
  )
}

export default UserDetails
