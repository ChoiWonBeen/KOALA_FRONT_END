import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refresh } from 'store/auth';
import { getUserInfo } from 'store/myPage';
import AuthPage from 'pages/AuthPage';
import Login from 'components/Auth/Login';
import FindId from 'components/Auth/FindId';
import FindPw from 'components/Auth/FindPw';
import RegisterDoc from 'components/Auth/RegisterDoc';
import Register from 'components/Auth/Register';
import ChangePw from 'components/Auth/ChangePw';
import MainPage from 'pages/MainPage';
import { setTokenOnHeader } from 'api/logined';
import { getCookie } from 'components/Shared/Cookies';
import MyPage from 'pages/MyPage';
import ChatPage from 'pages/ChatPage';
import ChatAuth from 'components/Chat/ChatAuth';
import Unauth from 'components/Chat/Unauth';

const AuthrizedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === null) {
    return <div>로딩중입니다.</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace={true} />;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = getCookie('refresh_token');
    setTokenOnHeader(token);
    dispatch(refresh());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="auth/*" element={<AuthPage />}>
          <Route index element={<Login />} />
          <Route path="createLog" element={<RegisterDoc />} />
          <Route path="createAccount" element={<Register />} />
          <Route path="findId" element={<FindId />} />
          <Route path="findPw" element={<FindPw />} />
          <Route path="changePw" element={<ChangePw />} />
        </Route>

        <Route element={<AuthrizedRoute />}>
          <Route exact path="chat/*" element={<ChatPage />}>
            <Route path="auth" element={<ChatAuth />} />
            <Route path="unauth" element={<Unauth />} />
          </Route>
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
