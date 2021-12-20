import logined from './logined';

export const login = ({ account, password }) => logined.post('user/login', { account, password });

export const refresh = () => logined.post('user/refresh');

export const checkNickname = (nickName) => logined.get(`/user/nickname-check?nickname=${nickName}`);

export const checkAccount = (account) => logined.get(`user/account-check?account=${account}-`);

export const signUp = ({ account, nickname, passwordm, find_email }) =>
  logined.post('/user/sing-in', { account, nickname, passwordm, find_email });
