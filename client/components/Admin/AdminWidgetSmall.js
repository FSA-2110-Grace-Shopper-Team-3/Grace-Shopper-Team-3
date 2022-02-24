import React from 'react';
import { Visibility } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import './admin.css';
import { Link } from 'react-router-dom';

const AdminWidgetSmall = () => {
  const users = useSelector((state) =>
    state.users.filter((user) => user.isAdmin === false)
  );

  return (
    <div className="ad-wgt-sm">
      <span className="ad-wgt-sm-tle">New Users</span>
      <ul className="ad-wgt-sm-lst">
        {users.map((user) => {
          return (
            <li className="ad-wgt-sm-lst-itm" key={user.id}>
              <img src={user.img} className="ad-wgt-sm-img" />
              <div className="ad-wgt-sm-usr">
                <span className="ad-wgt-sm-usrnm">{user.username}</span>
              </div>
              <Link to={`/admin/users/${user.id}`}>
                <button className="ad-wgt-sm-btn">
                  <Visibility className="ad-wgt-sm-icn" />
                  Display
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminWidgetSmall;
