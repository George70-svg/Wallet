import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledLoginErrors = styled.div`
  margin-top: -0.8rem;
  margin-left: 2rem;

  .error-text {
    font-weight: bold;
    font-size: ${() => commonStyle.fonts.fs0};
    color: ${() => commonStyle.colors.red};

    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
`
