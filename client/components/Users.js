import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../store';

const Users = () => {
  const users = useSelector((state) =>
    state.users.filter((user) => user.isAdmin === false)
  );
  const dispatch = useDispatch();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <button onClick={() => dispatch(deleteUser(user.id))}>x</button>
          <Link to={`/admin/users/${user.id}`}>{user.username} </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
