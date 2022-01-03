import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledInput = styled.input`
  width: 348px;
  height: 44px;
  border: solid 1px #c4c4c4;
  flex-grow: 0;
  padding-left: 16px;
  margin: 2px 0;
  position: relative;
  outline: none;
  &:focus {
    border: solid 1px #222;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #999;
    height: 21px;
    padding: 0px;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  color: #999;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #999;
    text-decoration: none;
  }
  ::after {
    top: 4px;
    background-color: #c4c4c4;
    margin: 0 15px;
    width: 1px;
    height: 12px;
    float: right;
    position: relative;
    content: '';
  }

  :last-child::after {
    content: none;
    float: right;
    margin: 0;
    width: 0;
    height: 0;
    margin: 0;
  }
`;

export const AutoLogin = styled.div`
  width: 400px;
  display: flex;
  margin-top: 8px;
`;

export const AutoLoginCheck = styled.div`
  width: 22px;
  height: 12px;
  margin-right: 4px;
  font-size: 10px;
`;

export const AutoLoginText = styled.label`
  font-size: 12px;
  color: #999;
`;

export const OtherOption = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-top: 16px;
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
  height: 383px;
`;

export const NoneUserLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin: 164px 0 198px 0;
  font-size: 14px;
  text-align: center;
  font-family: NotoSansCJKKR;
  text-decoration: underline;
  color: #999;

  :hover {
    text-decoration: underline;
  }
}
`;

export const CopyRight = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c4c4;
`;

export const Title = styled.div`
  height: 24px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
`;

export const Agree = styled.div`
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 24px;
  display: flex;
  text-align: left;
`;

export const AllAgree = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid #eee;
`;

export const AgreeText = styled.div`
  width: 350px;
`;

export const InputErrorText = styled.span`
  display: flex;
  height: 16px;
  position: absolute;
  margin: 4px 0;
  font-size: 11px;
  font-weight: 500;
  color: #ffd25d;
  justify-content: flex-start;
`;

export const Drop = styled.img`
  width: 20px;
  height: 20px;
`;

export const AuthDoc = styled.div`
  font-size: 12px;
  height: 166px;
  border: 1px solid #c4c4c4;
  padding: 16px;
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
  border: solid 1px #c4c4c4;
  transition: all 150ms;
  ${CheckDot}:checked + & {
    border: solid 1px #ffd25d;
    background-color: #ffd25d;
  }
`;
