import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 90%;

  background-color: ${() => commonStyle.colors.whiteOpacity};
  border-radius: ${() => commonStyle.radii.radius2};

  h3 {
    margin-top: 2rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;

    width: 75%;

    .input-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;

      width: 100%;

      .MuiTextField-root {
        margin-top: 0.5rem;
        flex-grow: 1;
      }

      .login-setting {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1rem;

        .label {
          span {
            font-size: ${() => commonStyle.fonts.fs0};
          }
        }

        p {
          font-weight: bold;
          font-size: ${() => commonStyle.fonts.fs0};
          cursor: pointer;
        }
      }
    }

    .enter-button {
      width: 8rem;
      height: 2.5rem;
      margin-bottom: 1rem;

      cursor: pointer;
      text-transform: capitalize;

      border-radius: ${() => commonStyle.radii.radius3};
      font-size: ${() => commonStyle.fonts.fs1};
      color: ${() => commonStyle.colors.white};
      background-color: ${() => commonStyle.colors.blue};
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 85%;
  }

  @media screen and (max-height: 600px) {
    width: 100%;
    height: 95%;
  }
`
