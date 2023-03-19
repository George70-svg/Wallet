import styled from 'styled-components'

export const StyledInvoice = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    .accounts-container {
      flex-basis: 50%;
    }

    .notations-container {
      flex-basis: 50%;
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;

    .accounts-container {
      flex-basis: 10rem;
    }

    .notations-container {
      flex-basis: 20rem;
    }
  }
`
