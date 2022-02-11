import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );

  return (
    <div>
      {/* {users.map((user) => (
        <div key={user.id}>
          <Link to={`/admin/users/${user.id}`}>{user.username} </Link>
        </div>
      ))} */}
      info for {user.username}
    </div>
  );
};

export default EditUser;
