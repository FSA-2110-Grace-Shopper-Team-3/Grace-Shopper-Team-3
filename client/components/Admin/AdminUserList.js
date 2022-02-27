import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store';
import { Edit } from '@material-ui/icons';
import dateFormat from 'dateformat';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import './admin.css';

const AdminUserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) =>
    state.users.filter((user) => user.isAdmin === false)
  );

  const notify = () => toast.success('user deleted');

  const handleDelete = (id) => dispatch(deleteUser(id), notify());

  const rows = users.map((user) => {
    const date = new Date(user.updatedAt);
    const formattedDate = dateFormat(date, 'paddedShortDate');
    const formattedTime = dateFormat(date, 'shortTime');

    return {
      id: user.id,
      username: user.username,
      avatar: user.img,
      email: user.email,
      status: 'active',
      updatedAt: `${formattedDate} - ${formattedTime}`,
    };
  });

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
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    { field: 'id', headerName: 'User ID', width: 320 },
    { field: 'updatedAt', headerName: 'Modified', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <>
            {injectStyle()}
            <Link to={`/admin/users/${params.row.id}`}>
              <button className="ad-usrlst-edit">
                <Edit className="ad-wgt-sm-icn" />
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="ad-usrlst-dlt"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div
      className="ad-usr-lst"
      style={{ height: 700, width: '100%', marginTop: 120 }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        pageSize={10}
      />
    </div>
  );
};

export default AdminUserList;
