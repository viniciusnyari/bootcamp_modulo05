import styled, { keyframes, css } from 'styled-components';

// Esse css se aplica somente ao componente Main
/*
export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
*/

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 80px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center; /*display flex, direction row e align center coloca tudo na mesma linha centralizado */
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex; /*display: flex com direction row coloca na mesma linha */
  flex-direction: row;

  input {
    flex: 1; /* para ocupar todo o espaço*/
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* evento para quando recebe o focus
  &.focus {

  };
  */

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /** Acessa as props que foram enviadas e se for loading = true irá rotacionar */
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
