import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_ID_ERROR, LOGIN_PASSWORD_ERROR } from 'constant';
import { resetAuthState } from 'store/auth';
import styled from 'styled-components';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import * as S from 'components/Auth/styles';
import { login } from 'store/auth';
import { uuid } from 'api/logined';

const LoginFormContainer = styled.form`
  position: relative;
  width: 100%;
`;

const StyledInput = styled(S.StyledInput)`
  & + & {
    margin-top: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    width: 308px;
    height: 44px;
    border: solid 1px ${(props) => props.theme.colors.lightgray};
  }
`;

const StyledInputContainer = styled.div`
  margin-bottom: 16px;
  position: relative;
  :nth-child(2) {
    margin-bottom: 8px;
  }
`;

const PwdSee = styled.span`
  display: block;
  right: 16px;
  top: 14px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    display: none;
  }
`;

const EyeImg = styled.img`
  width: 24px;
  height: 24px;
`;
const ErrorText = styled(S.InputErrorText)`
  margin: 0;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(JSON.parse(localStorage.getItem('isAuto')));
  const [isPasswordType, setIsPasswordType] = useState({
    type: 'password',
    visible: false,
  });
  const authErrorCode = useSelector((state) => state.auth.authError);
  const accountHandler = (e) => {
    setAccount(e.target.value);
    if (authErrorCode != null) {
      dispatch(resetAuthState());
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (authErrorCode != null) {
      dispatch(resetAuthState());
    }
  };

  /*
   * - 회원 로그인 시에 로그인에 대한 첫 로그인 시에는
   * - user_token이 이미 저장된 경우에는 이를 불러오고 아닌 경우에는
   * - uuid로 생성해서 로컬스토리지에 저장한다.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    let deviceToken;
    if (!localStorage.getItem('user_token')) {
      deviceToken = uuid();
      localStorage.setItem('user_token', `webuser+${deviceToken}`);
    } else {
      deviceToken = localStorage.getItem('user_token');
    }
    dispatch(login({ deviceToken, account, password }));
  };

  const handlePasswordType = (e) => {
    setIsPasswordType(() => {
      if (!isPasswordType.visible) return { type: 'text', visible: true };
      return { type: 'password', visible: false };
    });
  };

  const getPwdSvgName = (e) => {
    return isPasswordType.visible ? 'openEye' : 'closeEye';
  };

  return (
    <>
      <LoginFormContainer onSubmit={submitHandler}>
        <StyledInputContainer>
          <StyledInput
            value={account}
            onChange={accountHandler}
            error={authErrorCode == LOGIN_ID_ERROR}
            name="account"
            placeholder="아이디 입력"
          />
          {authErrorCode == LOGIN_ID_ERROR && <ErrorText>아이디가 일치하지 않습니다.</ErrorText>}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInput
            value={password}
            type={isPasswordType.type}
            onChange={passwordHandler}
            error={authErrorCode == LOGIN_PASSWORD_ERROR}
            name="password"
            placeholder="비밀번호 입력"
          />
          <PwdSee onClick={handlePasswordType}>
            <EyeImg src={'/asset/' + getPwdSvgName() + '.svg'} alt={getPwdSvgName()} />
          </PwdSee>
          {authErrorCode == LOGIN_PASSWORD_ERROR && <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>}
        </StyledInputContainer>

        <S.AutoLogin>
          <Switch autoLogin={autoLogin} setAutoLogin={setAutoLogin} />
          <S.AutoLoginText />
        </S.AutoLogin>

        <StyledButton>로그인</StyledButton>
      </LoginFormContainer>

      <S.OtherOption>
        <S.StyledLink to="findId">아이디 찾기</S.StyledLink>
        <S.StyledLink to="findPw">비밀번호 찾기</S.StyledLink>
        <S.StyledLink to="createLog">회원가입</S.StyledLink>
      </S.OtherOption>
    </>
  );
};

export default LoginForm;
