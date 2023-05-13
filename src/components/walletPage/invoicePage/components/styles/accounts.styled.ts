import styled from 'styled-components'
// @ts-ignore
import { ColorThemeProps } from '@types/stylesType'

import { commonStyle } from '../../../../../styles'

export const StyledAccounts = styled.div.attrs(() => ({
  className: 'accounts-container',
}))<ColorThemeProps>`
  flex-basis: 70%;
  margin: 2rem;
  background-color: ${(props) => commonStyle[props.colorTheme].widgetBackground};
  border-radius: ${() => commonStyle.radii.radius2};
`
