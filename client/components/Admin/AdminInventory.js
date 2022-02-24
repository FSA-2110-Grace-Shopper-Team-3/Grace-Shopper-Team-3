import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import './admin.css';

const columns = [
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'model', headerName: 'Model', width: 200 },
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
  { field: 'id', headerName: 'ID', width: 300 },
];

const AdminInventory = () => {
  const products = useSelector((state) => state.products);

  console.log(products);

  const rows = products;

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="inv" style={{ height: 700, width: '98%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AdminInventory;
