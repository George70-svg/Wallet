import styled from 'styled-components'

export const StyledWallet = styled.div.attrs(() => ({
  className: 'wallet-page',
}))`
  --header-height: 3rem;
  --main-height: calc(100vh - var(--header-height));

  header {
    height: var(--header-height);
  }

  .main-container {
    height: var(--main-height);
  }
`
