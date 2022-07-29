import React from 'react';
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from '../../../components/index';
import Users from '../users/Users';

const Dashboardd = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Users />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default Dashboardd;
