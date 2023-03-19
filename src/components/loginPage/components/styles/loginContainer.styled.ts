import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledLoginContainer = styled.div`
  @property --rotate {
    syntax: '<angle>';
    initial-value: 132deg;
    inherits: false;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: var(--login-card-height);
  width: var(--login-card-width);
  position: relative;
  padding: 2rem;

  background-image: url('../../../../assets/img/space.png');
  background-size: cover;
  border-radius: ${() => commonStyle.radii.radius2};
  color: ${() => commonStyle.colors.blue};

  &::before {
    content: '';
    width: 102%;
    height: 101%;

    position: absolute;
    z-index: -1;
    top: -0.4%;
    left: -1%;

    border-radius: ${() => commonStyle.radii.radius2};
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    animation: spin 2.5s linear infinite;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    z-index: -1;
    top: calc(var(--login-card-height) / 6);
    left: 0;
    right: 0;
    transform: scale(0.8);
    opacity: 1;

    filter: blur(calc(var(--login-card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }

  .login-input {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .login-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    button {
      width: 8rem;
      height: 2.5rem;
      cursor: pointer;
      text-transform: capitalize;

      border-radius: ${() => commonStyle.radii.radius3};
      font-size: ${() => commonStyle.fonts.fs1};
    }

    .active {
      color: ${() => commonStyle.colors.white};
      background-color: ${() => commonStyle.colors.blue};
      border: 2px solid ${() => commonStyle.colors.blue};
    }

    .passive {
      color: ${() => commonStyle.colors.white};
      background-color: transparent;
      border: 2px solid ${() => commonStyle.colors.white};
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
    gap: 2rem;
    border-radius: 0;
  }
`
