import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));

const ContactsPage = lazy(() => import('./Pages/ContactPage/ContactsPage'));

const Login = lazy(() => import('./Pages/LoginPage'));

const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));

export function App() {
  return (
    <Suspense
      fallback={Loading.pulse({
        svgColor: 'grey',
        cssAnimationDuration: 800,
        height: '200',
        width: '200',
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
