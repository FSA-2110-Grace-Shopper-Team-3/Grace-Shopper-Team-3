import React from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { DataGrid } from '@mui/x-data-grid';
import { Visibility } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './admin.css';

const AdminOrders = () => {
  const adminId = useSelector((state) => state.auth.id);

  const users = useSelector((state) =>
    state.users.filter((user) => user.id !== adminId)
  );

  const orders = useSelector((state) =>
    state.orders.filter((order) => order.userId !== adminId)
  );

  const rows = orders.map((order) => {
    const date = new Date(order.updatedAt);
    const formattedDate = dateFormat(date, 'paddedShortDate');
    const user = users.find((user) => user.id === order.userId) || {};

    return {
      id: order.id,
      user: user.username,
      userImg: user.img,
      total: order.totalPrice * 1,
      orderDate: order.isOrdered ? formattedDate : '',
      status: order.isOrdered ? 'confirmed' : 'pending',
    };
  });

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 320 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ad-usrlst-usr">
            <img className="ad-prdlst-img" src={params.row.userImg} alt="" />
            {params.row.user}
          </div>
        );
      },
    },
    { field: 'orderDate', headerName: 'Order Date', width: 160 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'total',
      headerName: 'Order Total',
      type: 'number',
      width: 150,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/orders/${params.row.id}`}>
              <button
                className={
                  params.row.orderDate !== ''
                    ? 'ad-usrlst-dsply'
                    : 'ad-prdlst-edit-dsbld'
                }
                disabled={params.row.orderDate === '' ? true : false}
              >
                <Visibility className="ad-wgt-sm-icn" />
                View Order
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div
      className="ad-inv"
      style={{ height: 700, width: '98%', marginTop: 120 }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default AdminOrders;
