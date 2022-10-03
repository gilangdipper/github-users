import Headers from '../components/organisms/Header'
import UserList from '../components/organisms/UserList'
import { MainContainer } from './common/styles'

function Home() {
  const userList = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']
  return (
    <MainContainer>
      <div className="main-content">
        <Headers title="Github Users" />
        <UserList list={userList} />
      </div>
    </MainContainer>
  )
}

export default Home
