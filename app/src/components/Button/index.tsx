import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StuledButton = styled.button`
  width: 500px;
  margin: 20px 0 150px 0;
  padding: 15px;
  font-size: 17px;
  border-radius: 0 0 0 0;
`;
const Button = ({ onClick }: { onClick: () => void }) => {
  // TODO: Mude o texto do botão para "Pague acompra"
  return (
    <>
      <StuledButton onClick={onClick}>Pague a compra</StuledButton>
    </>
  );
}

export default Button;