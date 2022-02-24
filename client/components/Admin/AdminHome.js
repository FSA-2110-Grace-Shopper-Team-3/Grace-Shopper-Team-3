import React from 'react';
import AdminFeaturedInfo from './AdminFeaturedInfo';
import AdminInventory from './AdminInventory';
import AdminWidgetLarge from './AdminWidgetLarge';
import AdminWidgetSmall from './AdminWidgetSmall';
import './admin.css';

const AdminHome = () => {
  return (
    <div className="ad-home">
      <AdminFeaturedInfo />
      {/* <AdminInventory /> */}
      <div className="ad-home-wgt">
        <AdminWidgetSmall />
        <AdminWidgetLarge />
      </div>
    </div>
  );
};

export default AdminHome;
