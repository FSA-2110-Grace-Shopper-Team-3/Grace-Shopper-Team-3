import React from 'react';
import { NotificationsNone, Settings } from '@material-ui/icons';
import AdminLogo from '../../../public/images/UNPLGD Admin-logos_black.png';
import { Link } from 'react-router-dom';
import './admin.css';

const AdminTopBar = ({ handleClick }) => {
  return (
    <div className="ad-topbar">
      <div className="ad-topbar-wrapper">
        <div className="ad-topbar-left">
          <span className="ad-logo">
            <div>
              <Link to="/admin">
                <img src={AdminLogo} style={{ width: 300 }} />
              </Link>
            </div>
          </span>
        </div>

        <div className="ad-topbar-right">
          <div>
            {/* <a href="#" onClick={handleClick}>
              Logout
            </a> */}
          </div>
          <div className="ad-topbar-iconcontainer">
            <NotificationsNone />
            <span className="ad-topicon-badge">1</span>
          </div>
          <div className="ad-topbar-iconcontainer">
            <Settings />
            <span className="ad-topicon-badge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar;
