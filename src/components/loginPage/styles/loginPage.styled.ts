import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  overflow: hidden;

  background-color: ${() => commonStyle.gradients.backgroundDark};
`
