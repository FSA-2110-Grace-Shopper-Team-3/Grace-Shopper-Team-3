import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminTopBar from './Admin/AdminTopBar';
import AdminSideBar from './Admin/AdminSideBar';
import AdminHome from './Admin/AdminHome';

const Analytics = () => {
  return (
    <div>
      <AdminTopBar />
      <div className="ad-container">
        <AdminSideBar />
        <AdminHome />
      </div>
    </div>
  );
};

export default Analytics;
