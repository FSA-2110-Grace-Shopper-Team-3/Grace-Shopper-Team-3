import React from 'react';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  People,
  Storefront,
  AttachMoney,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';
import './admin.css';

export default function AdminSideBar() {
  return (
    <div className="ad-sidebar">
      <div className="ad-sidebar-wrapper">
        <div className="ad-sidebar-menu">
          <h3 className="ad-sidebar-title">Dashboard</h3>
          <ul className="ad-sidebar-list">
            <Link to={'/admin'}>
              <li className="ad-sidebar-listitem">
                <LineStyle className="ad-sidebar-icon" />
                Home
              </li>
            </Link>
            <Link to={'/admin/users'}>
              <li className="ad-sidebar-listitem">
                <People className="ad-sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to={'/admin/inventory'}>
              <li className="ad-sidebar-listitem">
                <Storefront className="ad-sidebar-icon" />
                Products
              </li>
            </Link>
            <Link to={'/admin/orders'}>
              <li className="ad-sidebar-listitem">
                <AttachMoney className="ad-sidebar-icon" />
                Orders
              </li>
            </Link>
            <li className="ad-sidebar-listitem">
              <Timeline className="ad-sidebar-icon" />
              Analytics
            </li>
            {/* <li className="ad-sidebar-listitem">
              <TrendingUp className="ad-sidebar-icon" />
              Sales
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
