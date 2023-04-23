import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledNotations = styled.div.attrs(() => ({
  className: 'notations-container scroll-bar',
}))`
  overflow-y: scroll;
  flex-basis: 30%;
  margin: 2rem;
  background-color: ${() => commonStyle.colors.widgetBackgroundDark};
  border-radius: ${() => commonStyle.radii.radius2};
`
