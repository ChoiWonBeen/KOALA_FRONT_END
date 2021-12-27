import React from 'react';
import styled from 'styled-components';
import * as S from 'components/Auth/styles';

const StyledId = styled.div`
  position: relative;
  margin-top: 0;
  margin-bottom: 24px;
`;

const StyledInput = styled(S.StyledInput)`
  border: solid 1px ${({ isError }) => (isError ? '#ffd25d' : '#c4c4c4')};
  margin: 0;
  background-image: ${({ isError }) => (isError ? `url('/asset/inputError.svg')` : 'none')};
  background-position-y: center;
  background-position-x: 332px;
  background-repeat: no-repeat;
`;

const ErrorImg = styled.img`
  position: absolute;
  top: 30%;
  left: 90%;
  right: 0;
`;

const IdInput = (props) => {
  return (
    <StyledId>
      <StyledInput
        autocomplete="account"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        isError={props.isError}
        {...props}
      />
      {props.isError && <S.InputErrorText>{props.errorMessage}</S.InputErrorText>}
    </StyledId>
  );
};

export default IdInput;
