import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store';
import './admin.css';

// const handleDelete = (id) => {
//   const dispatch = useDispatch();
//   dispatch(deleteUser(id));
// };

const columns = [
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="ad-usrlst-usr">
          <img className="ad-usrlst-img" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={`/admin/users/${params.row.id}`}>
            <button className="ad-usrlst-edit">Edit</button>
          </Link>
          <DeleteOutline
            className="ad-usrlst-dlt"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];

const AdminUserList = () => {
  const users = useSelector((state) =>
    state.users.filter((user) => user.isAdmin === false)
  );

  const rows = users.map((user) => {
    return {
      id: user.id,
      username: user.username,
      avatar: user.img,
      email: user.email,
      status: 'active',
    };
  });

  return (
    <div>
      <div className="ad-usr-lst" style={{ height: 400, width: '100%' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          pageSize={6}
        />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};

export default AdminUserList;
