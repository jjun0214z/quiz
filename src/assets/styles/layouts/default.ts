import styled, { css } from 'styled-components';

const Default = {
  Wrapper: styled.main`
    /* ${({ theme }) => css`
      @media only screen and (min-width: ${theme.media.mobile}) {
        width: ${({ theme }) => theme.media.desktop};
        min-width: ${({ theme }) => theme.media.desktop};
        margin: 0 auto;
        padding: 50px;
      }

      @media only screen and (max-width: ${theme.media.mobile}) {
        width: auto;
        min-width: auto;
        padding: 10px;
      }
    `} */
  `,
};

export default Default;
