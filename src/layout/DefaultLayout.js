import React from 'react';
import Login from 'src/views/pages/login/Login';
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from '../components/index';

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Login />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
