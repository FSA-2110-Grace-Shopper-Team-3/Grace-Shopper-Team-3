import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../store';
import AdminSideBar from './Admin/AdminSideBar';

const Users = () => {
  const users = useSelector((state) =>
    state.users.filter((user) => user.isAdmin === false)
  );
  const dispatch = useDispatch();

  return (
    <div>
      {/* <AdminSideBar /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {users.map((user) => (
        <div key={user.id}>
          <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
          <Link to={`/admin/users/${user.id}`}>{user.username} </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
