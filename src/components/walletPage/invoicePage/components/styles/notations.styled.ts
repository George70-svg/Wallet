import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledNotations = styled.div.attrs(() => ({
  className: 'notations-container',
}))`
  overflow-y: scroll;
  height: 30rem;
  flex-basis: 30%;
  margin: 2rem;
  background-color: ${() => commonStyle.colors.widgetBackgroundDark};
  border-radius: ${() => commonStyle.radii.radius2};

  &::-webkit-scrollbar {
    //width: 0; // Убррать scroll bar
  }
`
