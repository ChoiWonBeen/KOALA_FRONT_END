import styled from 'styled-components';
import theme from '../../../theme';
const tabletL = theme.deviceSizes.tabletL;
const { white, black, darkgray, lightgray, silver, gray, yellow } = theme.colors;

export const Alert = styled.div`
  margin-top: 24px;
  width: 90%;
  min-width: 90%;
  margin: 0 auto;
`;
export const AlertWrapper = styled.li`
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    display: flex;
    justify-content: start;
    margin-top: 16px;
    margin-bottom: ${(props) => (props.state === 'WRITE' ? '9px' : '15px')};
  }
`;

export const AlertContent = styled.div`
  @media screen and (max-width: ${tabletL}) {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AlertDetail = styled.div`
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;

export const Sender = styled.div`
  @media screen and (max-width: ${tabletL}) {
    font-size: 14px;
    width: 52px;
    color: ${(props) => (props.isRead ? '#999' : '#222')};
  }
`;
export const ReceiveDate = styled.div`
  font-size: 11px;
  color: #797979;
`;
export const AlertTitle = styled.a`
  @media screen and (max-width: ${tabletL}) {
    display: block;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${(props) => (props.isRead ? '#999' : '#222')};
  }
`;
export const AlertBorderLine = styled.div`
  @media screen and (max-width: ${tabletL}) {
    &:after {
      display: block;
      content: '';
      width: 87%;
      border-bottom: 1px solid ${lightgray};
      margin-left: 3%;
    }
  }
`;
export const MemoWrapper = styled.div`
  @media screen and (max-width: ${tabletL}) {
    display: flex;
    justify-content: space-between;
    width: 96%;
    margin: 13px 0 0 0;
  }
`;
export const MemoCircle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${yellow};
  border-radius: 50%;
  margin: 5px 8px 0 0;
`;
export const MemoText = styled.div`
  width: 89%;
  color: ${gray};
`;

export const FixedAlert = styled.span`
  font-size: 11px;
  min-width: 38px;
  margin: 16px 0 0 0;
  color: ${gray};
`;

export const Memo = styled.div`
  display: flex;
`;
export const MemoFixBlock = styled.div`
  width: 88px;
  min-width: 88px;
  // height: 119px;
  // min-height: 119px;
  background: ${yellow};
  color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MemoWriteBlock = styled.div`
  width: 88px;
  min-width: 88px;
  // heigth: 119px;
  background: ${darkgray};
  color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuBlock = styled.div`
  width: 176px;
  display: flex;
  border: 1px solid white;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 11px;
`;
export const MemoOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${gray};
  margin: 11px 0 0 0;
`;
export const LetterCounter = styled.div`
  font-size: 12px;
`;
export const WriteBlockWrapper = styled.div`
  width: 88%;
  height: 74px;
  background: ${lightgray};
  padding: 8px;
  margin-top: 8px;
`;
export const SaveBtn = styled.div`
  font-size: 11px;
  cursor: pointer;
`;

export const NoResultBox = styled.div`
  @media screen and (max-width: ${tabletL}) {
    width: 100%;
    color: ${gray};
    font-size: 14px;
    margin: 0 auto;
    margin: 72px 0 0 0;
    text-align: center;
  }
`;
