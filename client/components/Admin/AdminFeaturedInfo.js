import React from 'react';
import { ArrowUpward } from '@material-ui/icons';
import './admin.css';

export default function AdminFeaturedInfo() {
  return (
    <div className="ad-ft">
      <div className="ad-ft-item">
        <span className="ad-ft-title">Sales</span>
        <div className="ad-ft-mny-ctnr">
          <span className="ad-ft-mny">$2,415</span>
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
