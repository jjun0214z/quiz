import styled, { css } from 'styled-components';

const basic = function (props: any) {
  const { size, color } = props;
  return css`
    min-width: 200px;
    padding: 10px;
    border: 1px solid #2e2e2e;
    color: #000;
    text-align: center;
    background: none;
    cursor: pointer;
  `;
};

const Buttons = {
  B: {
    Basic: styled.button`
      ${(props) => basic(props)}
    `,
  },
  A: {
    Basic: styled.button`
      ${(props) => basic(props)}
    `,
  },
};

export default Buttons;
