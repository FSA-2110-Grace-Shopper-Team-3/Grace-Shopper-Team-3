import React from 'react';
import AdminSideBar from './AdminSideBar';
import AdminHome from './AdminHome';

const Admin = () => {
  return (
    <div>
      <div className="ad-container">
        <AdminSideBar />
        <AdminHome />
      </div>
    </div>
  );
};

export default Admin;
