import Headers from '../components/organisms/Header'
import { MainContainer } from './common/styles'

function Home() {
  return (
    <MainContainer>
      <div className="main-content">
        <Headers title="Github Users" />
      </div>
    </MainContainer>
  )
}

export default Home
