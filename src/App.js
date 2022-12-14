import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import BarChats from './views/pages/charts/BarChats';
import './scss/style.scss';
import Dashboardd from './views/pages/dashboard/Dashboardd';
// import  from './views/pages/register/Register';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const CreateAcc = React.lazy(() => import('./views/pages/createAcc/CreateAcc'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Users = React.lazy(() => import('./views/pages/users/Users'));
const Update = React.lazy(() => import('./views/pages/update/Update'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const BarChats = React.lazy(() => import('./views/pages/charts/BarChats'));

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
                name="CreateAccount Page"
                element={<CreateAcc />}
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
              <Route
                exact
                path="/register"
                name="Register Page"
                element={<Register />}
              />
              <Route
                exact
                path="/barChats"
                name="BarChats Page"
                element={<BarChats />}
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
