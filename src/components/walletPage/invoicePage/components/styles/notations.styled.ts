import styled from 'styled-components'
// @ts-ignore
import { ColorThemeProps } from '@types/stylesType'

import { commonStyle } from '../../../../../styles'

export const StyledNotations = styled.div.attrs(() => ({
  className: 'notations-container scroll-bar',
}))<ColorThemeProps>`
  overflow-y: scroll;
  flex-basis: 30%;
  margin: 2rem;
  background-color: ${(props) => commonStyle[props.colorTheme].widgetBackground};
  border-radius: ${() => commonStyle.radii.radius2};
`
