import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledNavigation = styled.header`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 0.5rem;
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
`
