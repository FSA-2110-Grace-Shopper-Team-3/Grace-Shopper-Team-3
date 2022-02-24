import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProd } from '../../store';
import './admin.css';

const AdminInventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const rows = products.map((product) => {
    return {
      id: product.id,
      category: product.category,
      img: product.img,
      brand: product.brand,
      model: product.model,
      price: product.price,
      quantity: product.quantity,
    };
  });

  const columns = [
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    {
      field: 'model',
      headerName: 'Model',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ad-prdlst-prd">
            <img className="ad-prdlst-img" src={params.row.img} alt="" />
            {params.row.model}
          </div>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 100,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 100,
    },
    { field: 'id', headerName: 'Product ID', width: 300 },
    {
      field: 'action',
      headerName: 'Action',
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/inventory/${params.row.id}`}>
              <button className="ad-prdlst-edit">Edit</button>
            </Link>
            {/* <Link to={`/admin/users/${params.row.id}`}>
              <button className="ad-prdlst-edit">View Orders</button>
            </Link> */}
            <DeleteOutline
              className="ad-prdlst-dlt"
              onClick={() => dispatch(deleteProd(params.row.id))}
            />
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

export default AdminInventory;
