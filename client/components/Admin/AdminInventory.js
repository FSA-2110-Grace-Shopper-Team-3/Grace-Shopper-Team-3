import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DeleteOutline, Edit, Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProd } from '../../store';
import Rating from '@mui/material/Rating';
import dateFormat from 'dateformat';
import './admin.css';

const AdminInventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const rows = products.map((product) => {
    const date = new Date(product.updatedAt);
    const formattedDate = dateFormat(date, 'paddedShortDate');
    const formattedTime = dateFormat(date, 'shortTime');
    return {
      id: product.id,
      category: product.category,
      img: product.img,
      brand: product.brand,
      model: product.model,
      price: product.price,
      quantity: product.quantity,
      rating: product.rating,
      updatedAt: `${formattedDate} - ${formattedTime}`,
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
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Rating
              name="read-only"
              value={params.row.rating}
              size="small"
              readOnly
            />
          </>
        );
      },
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 100,
    },
    { field: 'id', headerName: 'Product ID', width: 300 },
    { field: 'updatedAt', headerName: 'Modified', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/inventory/${params.row.id}`}>
              <button className="ad-prdlst-edit">
                <Edit className="ad-wgt-sm-icn" />
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="ad-prdlst-dlt"
              onClick={() => dispatch(deleteProd(params.row.id))}
            />
          </>
        );
      },
    },
    {
      field: 'create',
      headerName: (
        <Link to={`/admin/addproduct`}>
          <button className="ad-prdlst-add">
            <Add />
            Add Product
          </button>
        </Link>
      ),
      width: 190,
      sortable: false,
      filter: false,
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
