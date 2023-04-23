import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledAccounts = styled.div.attrs(() => ({
  className: 'accounts-container',
}))`
  flex-basis: 70%;
  margin: 2rem;
  background-color: ${() => commonStyle.colors.widgetBackgroundDark};
  border-radius: ${() => commonStyle.radii.radius2};
`
