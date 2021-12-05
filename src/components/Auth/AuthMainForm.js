import React from 'react';
import styled from 'styled-components';
import Switch from 'components/Shared/Switch';
import StyledButton from 'components/Shared/Button';
import * as S from 'components/Auth/styles';

const AuthForm = styled.div``;

const EyeImg = styled.img`
  position: absolute;
  top: 31px;
  left: 328px;
  right: 0;
`;

const StyledPwd = styled.div`
  position: relative;
`;

const AuthMainForm = () => (
  <AuthForm>
    <S.StyledInput autocomplete="username" name="username" placeholder="아이디 입력" />
    <StyledPwd>
      <S.StyledInput autoComplete="new-password" name="password" placeholder="비밀번호 입력" type="password" />
      <EyeImg src="/asset/pwdEye.svg" alt="eye" />
    </StyledPwd>
    <S.AutoLogin>
      <S.AutoLoginCheck>
        <Switch />
      </S.AutoLoginCheck>
      <S.AutoLoginText>자동 로그인</S.AutoLoginText>
    </S.AutoLogin>
    <StyledButton>로그인</StyledButton>
    <S.OtherOption>
      <S.StyledLink to="idfind">아이디 찾기</S.StyledLink>
      <p> | </p>
      <S.StyledLink to="pwdfind">비밀번호 찾기</S.StyledLink>
      <div>|</div>
      <S.StyledLink to="register">회원가입</S.StyledLink>
    </S.OtherOption>
    <S.SnsLoginText>SNS로 간편 로그인하기</S.SnsLoginText>
    <S.OauthLogin>
      <img src="/asset/kakaoLogo.webp" alt="kakao" />
      <img src="/asset/naverLogo.webp" alt="kakao" />
      <img src="/asset/googleLogo.webp" alt="kakao" />
    </S.OauthLogin>
    <S.NoneUser>비회원으로 이용하기</S.NoneUser>
    <S.CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</S.CopyRight>
  </AuthForm>
);

export default AuthMainForm;
