import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
