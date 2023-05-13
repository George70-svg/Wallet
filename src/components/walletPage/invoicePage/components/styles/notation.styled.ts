import styled from 'styled-components'
// @ts-ignore
import { ColorThemeProps } from '@types/stylesType'

import { commonStyle } from '../../../../../styles'

export const StyledNotationItem = styled.div<ColorThemeProps>`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: ${() => commonStyle.radii.radius2};
  background-color: transparent;
  color: ${() => commonStyle.colors.grey200};
  transition: background-color 0.3s;
  cursor: pointer;

  .right-container {
    display: flex;
    gap: 1rem;

    .icon-container {
      div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 3rem;
        height: 3rem;
        border-radius: ${() => commonStyle.radii.radiusFull};
      }
    }

    .category-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0.25rem 0;

      .category {
        font-size: ${() => commonStyle.fonts.fs1};
        font-weight: bold;
      }

      .date {
        font-size: ${() => commonStyle.fonts.fs0};
      }
    }
  }

  .left-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .money-container {
      font-size: ${() => commonStyle.fonts.fs1};
    }
  }

  &:hover {
    background-color: ${(props) => commonStyle[props.colorTheme].widgetBackgroundHover};
    transition: background-color ${() => commonStyle.times.time4};
  }
`
