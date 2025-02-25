import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainLogo = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const MainLogoImg = styled.i`
  width: 125px;
  height: 34px;

  background: no-repeat url(/asset/mainLogo.svg);
  background-size: 125px 34px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 158px;
    height: 43px;
    background-size: 158px 43px;
  }
`;

export const StyledInput = styled.input`
  width: 348px;
  height: 44px;
  border: ${(props) =>
    props.error ? `solid 1px ${props.theme.colors.yellow}` : `solid 1px ${props.theme.colors.silver}`};
  flex-grow: 0;
  padding-left: 16px;
  margin: 2px 0;
  position: relative;
  outline: none;

  &:focus {
    border: solid 1px ${(props) => props.theme.colors.darkgray};
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: ${(props) => props.theme.colors.gray};
    text-decoration: none;
  }
  ::after {
    top: 4px;
    background-color: ${(props) => props.theme.colors.silver};
    margin: 0 15px;
    width: 1px;
    height: 12px;
    float: right;
    position: relative;
    content: '';
  }

  :last-child::after {
    content: '';
    float: right;
    margin: 0;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    color: #a8a8a8;
    font-weight: normal;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      color: #a8a8a8;
    }

    ::after {
      top: 4px;
      background-color: ${(props) => props.theme.colors.lightgray};
      margin: 0 15px;
      width: 1px;
      height: 12px;
      float: right;
      position: relative;
      content: '';
    }
  }
`;

export const AutoLogin = styled.div`
  display: flex;
  position: relative;
  left: 78%;
  width: 84px;

  align-items: center;
  z-index: 1;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
  }
`;

export const AutoLoginCheck = styled.div`
  width: 22px;
  height: 12px;
  margin-right: 4px;
  font-size: 10px;
`;

export const AutoLoginText = styled.label`
  color: ${(props) => props.theme.colors.gray};
  margin-left: 4px;
  font-size: 12px;
  width: 100%;

  :after {
    content: '자동 로그인';
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    :after {
      content: '자동 로그인';
    }
  }
`;

export const OtherOption = styled.div`
  display: flex;
  width: 380px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin-top: 16.6px;

    a:nth-child(2) {
      right: -75px;
      position: relative;

      ::after {
        display: none;
      }
    }

    a:nth-child(3) {
      left: -68px;
      position: relative;

      ::after {
        top: 4px;
        background-color: ${(props) => props.theme.colors.lightgray};
        margin: 0 15px;
        width: 1px;
        height: 12px;
        float: right;
        position: relative;
        content: '';
      }
    }
  }
`;

export const SNSLoginText = styled.div`
  width: 152px;
  height: 18px;
  font-size: 10px;
  margin: 28px 108px 16px 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OauthLogin = styled.div`
  width: 155px;
  margin: 0 108px 0 108px;
  display: flex;
  justify-content: space-between;
`;

export const NoneUserLinkSection = styled.section`
  height: ${({ isNormalLogin }) => (isNormalLogin ? '383px' : '463px')};
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    position: relative;
    top: ${({ isNormalLogin }) => (isNormalLogin ? '0' : '40px')};
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileM}) {
    height: 163px;
    display: ${({ isNormalLogin }) => (isNormalLogin ? 'block' : 'none')};
  }
`;

export const NoneUserLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  font-family: NotoSansCJKKR;
  text-decoration: underline;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin: 72px 0 70px 0;
  }
}
`;

export const CopyRight = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.colors.silver};

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: none;
  }
`;

export const Title = styled.div`
  background: ${(props) => props.theme.colors.white};
  height: 24px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;

  z-index: 1;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
    width: 100%;
    padding: 24px 0 14px 0;
    color: ${(props) => props.theme.colors.darkgray};
    left: 0;
    top: 0;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    position: fixed;
    line-height: 1.5;
  }
`;

export const Agree = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding-left: 20px;
  padding-bottom: 23.5px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    padding: 12px 0;
    text-align: left;
    width: 100%;
  }
`;

export const AllAgree = styled.div`
  margin: 23.5px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};

  @media only screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    margin: 3.5px 0;
  }
`;

export const AgreeText = styled.label`
  color: ${(props) => props.theme.colors.darkgray};
  font-size: 14px;
  line-height: 1.2;
`;

export const InputErrorText = styled.span`
  display: flex;
  height: 16px;
  position: absolute;
  margin: 4px 0;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.yellow};
  justify-content: flex-start;
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
`;

export const AuthDoc = styled.section`
  font-size: 12px;
  width: 312px;
  height: 122px;
  border: 1px solid ${(props) => props.theme.colors.silver};
  margin: 18px 0;
  padding: 16px;
  left: 11px;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    border: 1px solid ${(props) => props.theme.colors.lightgray};
    left: 0;
    width: calc(100% - 32px);
  }
`;

export const CheckDotLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
`;

export const CheckDot = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const CustomCheckDot = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-right: 20px;
  border: solid 1px ${(props) => props.theme.colors.silver};
  transition: all 150ms;
  ${CheckDot}:checked + & {
    border: solid 1px ${(props) => props.theme.colors.yellow};
    background-color: ${(props) => props.theme.colors.yellow};
  }

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    background-color: ${(props) => props.theme.colors.white};
    width: inherit;
    top: 0;
    position: absolute;
  }
`;

export const ContentSection = styled.div`
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    top: 62px;
    position: relative;
  }
`;

export const ContentDescSection = styled.section`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: block;
    margin-top: 24px;
    margin-bottom: 9px;
    position: relative;
  }
`;

export const DescTitle = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.darkgray};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

export const DescText = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  color: ${(props) => props.theme.colors.gray}; ;
`;

export const BottomProgressBar = styled.div`
  margin-top: 66px;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    position: fixed;
    bottom: 40px;
  }
`;

export const ProgressBarSection = styled.div`
  display: none;
  padding: 16px 0;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobileL}) {
    display: flex;
  }
`;

export const ProgressCircle = styled.div`
  background-color: ${({ isOnProgress, ...props }) =>
    isOnProgress ? props.theme.colors.yellow : props.theme.colors.silver};
  width: 8px;
  height: 8px;
  flex-grow: 0;
  margin: 0 16px 0 0;
  border-radius: 100%;

  :last-child {
    margin: 0;
  }
`;
