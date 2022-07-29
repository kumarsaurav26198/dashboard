import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';
import Dashboardd from './views/pages/dashboard/Dashboardd';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Users = React.lazy(() => import('./views/pages/users/Users'));
const Update = React.lazy(() => import('./views/pages/update/Update'));

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route
                exact
                path="/login"
                name="Login Page"
                element={<Login />}
              />
              <Route
                exact
                path="/dashboardd"
                name="Dashboardd Page"
                element={<Dashboardd />}
              />
              <Route
                exact
                path="/createAccount"
                name="Register Page"
                element={<createAccount />}
              />
              <Route
                exact
                path="/users"
                name="Users Page"
                element={<Users />}
              />
              <Route
                exact
                path="/update"
                name="Update Page"
                element={<Update />}
              />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
