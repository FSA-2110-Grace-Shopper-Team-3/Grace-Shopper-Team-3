import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1>VIEW / EDIT USERS</h1>
    </div>
  );
};

export default Users;
