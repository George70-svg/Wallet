import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledNavigation = styled.header`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  font-size: ${() => commonStyle.fonts.fs2};
  text-align: center;

  .active {
    border-bottom: 2px solid white;
  }
`
