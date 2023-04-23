import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledUserMenuOuter = styled.div.attrs(() => ({
  className: 'user-menu-button',
}))`
  cursor: pointer;
`

export const StyledUserMenuInner = styled.div.attrs(() => ({
  className: 'user-menu-container',
}))`
  height: 100%;
  
  .MuiBox-root {
    height: 100%;
  }
  
  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${() => commonStyle.colors.darkPurple};
    
    .header {
      height: 12rem;
      background-image: url('../../../../assets/img/astronaut.png');
      background-color: ${() => commonStyle.colors.grey900};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 0 0 5rem 5rem;
    }

    .main {
      flex-grow: 1;
      margin-top: 2rem;
      padding: 0.3rem 1rem;
      color: ${() => commonStyle.colors.white};

      .currency {
        display: flex;
        justify-content: space-between;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: ${() => commonStyle.colors.grey900};
      color: ${() => commonStyle.colors.grey100};

      .profile {
        display: flex;
        align-items: center;
        gap: 1rem;

        .icon {

        }

        p {

        }
      }

      .logout {
        cursor: pointer;

        .icon {

        }
      }
    }
  }
`
