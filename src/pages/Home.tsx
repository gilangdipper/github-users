import Headers from '../components/organisms/Header'
import HomeDetails from '../components/organisms/HomeDetails'

import { MainContainer } from './common/styles'

function Home() {
  const userList = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']
  return (
    <MainContainer>
      <div className="main-content">
        <Headers title="Github Users" />
        <HomeDetails list={userList} />
      </div>
    </MainContainer>
  )
}

export default Home
