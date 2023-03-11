import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledNotations = styled.div`
  flex-basis: 33%;
  margin: 2rem;
  background-color: ${() => commonStyle.colors.widgetBackgroundDark};
  border-radius: ${() => commonStyle.radii.radius2};
`
