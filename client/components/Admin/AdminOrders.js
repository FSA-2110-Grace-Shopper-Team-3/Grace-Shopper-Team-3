import React from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './admin.css';

const AdminOrders = () => {
  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.users);

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

  console.log(orders);

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 320 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ad-prdlst-prd">
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
                    ? 'ad-prdlst-edit'
                    : 'ad-prdlst-edit-dsbld'
                }
                disabled={params.row.orderDate === '' ? true : false}
              >
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

//-----------------------------------------------------------

// const columns = [
//   { field: 'category', headerName: 'Category', width: 130 },
//   { field: 'brand', headerName: 'Brand', width: 130 },
//   {
//     field: 'model',
//     headerName: 'Model',
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <div className="ad-prdlst-prd">
//           <img className="ad-prdlst-img" src={params.row.img} alt="" />
//           {params.row.model}
//         </div>
//       );
//     },
//   },
//   {
//     field: 'price',
//     headerName: 'Price',
//     type: 'number',
//     width: 100,
//   },
//   {
//     field: 'quantity',
//     headerName: 'Quantity',
//     type: 'number',
//     width: 100,
//   },
//   { field: 'id', headerName: 'ID', width: 300 },
//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 220,
//     renderCell: (params) => {
//       return (
//         <>
//           <Link to={`/admin/inventory/${params.row.id}`}>
//             <button className="ad-prdlst-edit">Edit</button>
//           </Link>
//           {/* <Link to={`/admin/users/${params.row.id}`}>
//             <button className="ad-prdlst-edit">View Orders</button>
//           </Link> */}
//           <DeleteOutline
//             className="ad-prdlst-dlt"
//             // onClick={() => handleDelete(params.row.id)}
//           />
//         </>
//       );
//     },
//   },
// ];

// const AdminInventory = () => {
//   const products = useSelector((state) => state.products);

//   console.log(products);

//   const rows = products.map((product) => {
//     return {
//       id: product.id,
//       category: product.category,
//       img: product.img,
//       brand: product.brand,
//       model: product.model,
//       price: product.price,
//       quantity: product.quantity,
//     };
//   });

//   return (
//     <div
//       className="ad-inv"
//       style={{ height: 700, width: '98%', marginTop: 120 }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[5]}
//         disableSelectionOnClick
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default AdminInventory;
