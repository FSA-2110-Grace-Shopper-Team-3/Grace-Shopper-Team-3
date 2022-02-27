import React from 'react';
import { ArrowUpward, Group } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import AdminAnalytics from './AdminAnalytics';
import './admin.css';

export default function AdminFeaturedInfo() {
  const orders = useSelector((state) =>
    state.orders.filter((order) => order.isOrdered === true)
  );

  const total = orders.reduce((acc, order) => (acc += order.totalPrice * 1), 0);

  const users = useSelector((state) =>
    state.users.filter((user) => user.username !== 'admin')
  );

  return (
    <div className="ad-ft">
      <div className="ad-ft-item">
        <span className="ad-ft-title">Sales</span>
        <div className="ad-ft-mny-ctnr">
          <span className="ad-ft-mny">${1 + total.toFixed(2)}</span>
          <span className="ad-ft-mny-rt">
            <ArrowUpward className="ad-ft-icon" />
          </span>
        </div>
        <span className="ad-ft-sub">Compared to last month</span>
      </div>
      <div className="ad-ft-item">
        <span className="ad-ft-title">Sales by Product Type</span>
        <div className="ad-ft-mny-ctnr">
          <span className="ad-ft-mny"></span>
          <span className="ad-ft-mny-rt">
            <AdminAnalytics />
          </span>
        </div>
      </div>
      <div className="ad-ft-item">
        <span className="ad-ft-title">Active Users</span>
        <div className="ad-ft-mny-ctnr">
          <span className="ad-ft-mny">{users.length}</span>
          <span className="ad-ft-mny-rt">
            <Group className="ad-ft-icon-usr" />
          </span>
        </div>
        <span className="ad-ft-sub">Compared to last week</span>
      </div>
    </div>
  );
}
