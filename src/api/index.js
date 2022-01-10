import logined from './logined';

export const login = ({ account, password }) => logined.post('user/login', { account, password });

export const refresh = () => logined.post('user/refresh');

export const checkNickname = (nickName) => logined.get(`/user/nickname-check?nickname=${nickName}`);

export const checkAccount = (account) => logined.get(`user/account-check?account=${account}-`);

export const checkEmail = (email) => logined.get(`user/email-check?email=${email}`);

export const signUp = ({ account, password, find_email, nickname }) =>
  logined.post('/user/sing-in', { account, password, find_email, nickname });


export const keywordAPI = {
  InquiryKeyword : () => logined.get(`/keyword`),
  getKeywordList : (keywordName) => logined.get(`/keyword/list?keyword-name=${keywordName}`),
  deleteKeywordList : ({startId,endId}) => logined.patch(`/keyword/list/notice?notice-id=${startId}-${endId}`),
  deleteKeywordItem : (id) => logined.patch(`/keyword/list/notice?notice-id=${id}`),
  movekeywordList : (data) => logined.post(`/scrap`,{"board_id":data}),
  readKeywordItem : (id) => logined.patch(`/keyword/list/notice/reading-check?notice-id=${id}`)
}