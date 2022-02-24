import React from 'react';
import { ArrowUpward } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import './admin.css';

export default function AdminFeaturedInfo() {
  const orders = useSelector((state) =>
    state.orders.filter((order) => order.isOrdered === true)
  );

  const total = orders.reduce((acc, order) => (acc += order.totalPrice * 1), 0);

  return (
    <div className="ad-ft">
      <div className="ad-ft-item">
        <span className="ad-ft-title">Sales</span>
        <div className="ad-ft-mny-ctnr">
          <span className="ad-ft-mny">${total}</span>
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
          <span className="ad-ft-mny-rt">*ADD PIE CHART HERE*</span>
        </div>
        <span className="ad-ft-sub"></span>
      </div>
    </div>
  );
}
