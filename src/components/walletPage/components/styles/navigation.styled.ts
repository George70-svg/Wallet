import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledNavigation = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  //background-color: ${() => commonStyle.colors.grey800};
  font-size: ${() => commonStyle.fonts.fs2};
  text-align: center;
  
  .links {
    .MuiButtonBase-root {
      min-width: 10rem;
      height: 3rem;
      border: none;
      color: white;
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
    
    .Mui-selected {
      color: ${() => commonStyle.colors.purple};
    }

    .MuiTabs-indicator {
      background-color: ${() => commonStyle.colors.purple};
    }
  }
  
  .user-menu-container {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
  }
`
