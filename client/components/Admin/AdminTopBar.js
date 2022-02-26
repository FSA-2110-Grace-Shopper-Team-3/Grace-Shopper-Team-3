import React from 'react';
import { NotificationsNone, Settings, ExitToApp } from '@material-ui/icons';
import AdminLogo from '../../../public/images/UNPLGD Admin-logos_black.png';
import { Link } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
import { useDispatch } from 'react-redux';
import { logout } from '../../store';
import './admin.css';

const AdminTopBar = () => {
  const dispatch = useDispatch();

  return (
    <>
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
            <div className="ad-topbar-iconcontainer">
              <NotificationsNone />
              <span className="ad-topicon-badge">1</span>
            </div>
            <div className="ad-topbar-iconcontainer">
              <Settings />
              <span className="ad-topicon-badge">1</span>
            </div>
            <div className="ad-topbar-iconcontainer">
              <ExitToApp onClick={() => dispatch(logout())} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTopBar;
