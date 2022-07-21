import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  align-items: center;
  width: 500px;
  background-color: #484848;
  margin: 1.5px;
`;

const StyledInnerLabel = styled.p`
  position: absolute;
  top: -2px;
  color: #6c6767;
  font-size: 13px;
  &.prefix {
    max-width: 100px;
    padding-left: 16px;
  }
  &.suffix {
    max-width: fit-content;
    padding-right: 16px;
    right: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 2;
  padding-right: 100px;
  padding-left: 100px;
  color: #b6bbc6;
`;

const InputWithInnerLabel = ({ label, value, id }: { label: string, value: string, id?: string }) => {
  return (
    <StyledContainer>
      <StyledInnerLabel className="prefix">{label}</StyledInnerLabel>{' '}
      <StyledInput id={String(id)} type="text" disabled value={value} />
    </StyledContainer>
  );
};

export default InputWithInnerLabel;