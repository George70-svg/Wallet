import styled from 'styled-components'

export const StyledLoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .portrait {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .landscape {
    display: none;
  }

  @media screen and (max-width: 1023px) and (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .portrait {
      display: none;
    }

    .landscape {
      display: flex;
    }
  }
`
