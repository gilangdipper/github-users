import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 20px auto;
  width: 100%;
  max-width: 425px;

  .main-content {
    display: flex;
    flex: 1 1 auto;
    flex-flow: row wrap;
    align-self: self-start;
    padding: 0 14px;
  }
`
