import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from './constant';
import { refresh } from 'store/auth';
import { getUserInfo } from 'store/myPage';
import LoadingPage from 'pages/LodingPage';
import NotFoundPage from 'pages/404';
import AuthPage from 'pages/AuthPage';
import OAuthPage from 'pages/OAuthPage';
import Login from 'components/Auth/Login/Login';
import FindId from 'components/Auth/Find/FindId';
import FindPw from 'components/Auth/Find/FindPw';
import RegisterDoc from 'components/Auth/Register/RegisterDoc';
import Register from 'components/Auth/Register/Register';
import HistoryPage from 'pages/HistoryPage';
import { setTokenOnHeader } from 'api/logined';
import { getCookie } from 'components/Shared/Cookies';
import { inquiry } from 'store/keyword';
import ScrapContent from 'components/History/Scrap/ScrapContent';
import HistoryContent from 'components/History/History/HistoryContent';
import MyPage from 'pages/MyPage';
import ChatPage from 'pages/ChatPage';
import ChatAuth from 'components/Chat/ChatAuth';
import Unauth from 'components/Chat/Unauth';
import KeywordPage from 'pages/KeywordPage';
import KeywordFilterBar from 'components/Keyword/KeywordFilter';
import AddKeyword from 'components/Keyword/AddKeyword';
import ModifyKeyword from 'components/Keyword/ModifyKeyword';
import SettingKeyword from 'components/Keyword/SettingKeyword';
import ChatRoom from 'components/Chat/ChatRoom';
import SideNavbar from 'components/SideNavbar';
import MainPage from 'pages/mainPage';

const AuthorizedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === null) {
    return <LoadingPage />;
  }
  return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN} replace={true} />;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSchoolAuth = useSelector((state) => state.myPage.isAuth);
  useEffect(() => {
    const token = getCookie('refresh_token');
    if (token != null) {
      setTokenOnHeader(token);
      dispatch(refresh());
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
      dispatch(inquiry());
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="auth/*" element={<AuthPage />}>
          <Route index element={<Login />} />
          <Route path="createLog" element={<RegisterDoc />} />
          <Route path="createAccount" element={<Register />} />
          <Route path="findId" element={<FindId />} />
          <Route path="findPw" element={<FindPw />} />
        </Route>

        <Route path="oAuth/*" element={<OAuthPage />} />

        <Route element={<AuthorizedRoute />}>
          <Route path="/*" element={<MainPage />}>
            <Route exact path="mypage" element={<MyPage />} />
            <Route path="keyword/*" element={<KeywordPage />}>
              <Route index element={<KeywordFilterBar />}></Route>
              <Route path="create" element={<AddKeyword />}></Route>
              <Route path="modify" element={<ModifyKeyword />}></Route>
              <Route path="mypage" element={<SettingKeyword />}></Route>
            </Route>
            <Route exact path="chat/*" element={<ChatPage />}>
              <Route path="auth" element={<ChatAuth />} />
              <Route path="room" element={isSchoolAuth ? <ChatRoom /> : <Unauth />} />
            </Route>
            <Route path="history/*" element={<HistoryPage />}>
              <Route index element={<HistoryContent />} />
              <Route path="scrap" element={<ScrapContent />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
