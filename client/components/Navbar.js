import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logout, emptyGuestOrderItem } from '../store';
import { ToastContainer, toast, Sdivde } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Cart from './Cart';
import Logo1 from '../../public/images/UNPLGD-nav-logo.png';
import Logo1White from '../../public/images/UNPLGD-logo1_white.png';

const Navbar = ({ handleClick, isLoggedIn, orderItems }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';

  const currUser =
    useSelector((state) => state.users.find((user) => user.id === userId)) ||
    {};

  const matchingOrder =
    useSelector((state) =>
      state.orders.find(
        (order) => order.userId === userId && order.isOrdered === false
      )
    ) || {};

  const matchingOrderItems =
    orderItems.filter((orderItem) => orderItem.orderId === matchingOrder.id) ||
    [];

  const products = useSelector((state) => state.products);
  //-------------------Guest Cart Functionadivty---------------------//

  const guestCart = useSelector((state) => state.guestOrderItems) || [];

  const guestCartTotal = guestCart.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  const cartTotal = matchingOrderItems.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  const notify = () => toast.success('added to cart!');

  //-------------------Cart Drawer Functionadivty---------------------//
  const [cartDrawer, setCartDrawer] = useState(false);

  const close = () => {
    setCartDrawer(false);
  };

  return (
    <div className="navbar">
      {isLoggedIn && currUser.isAdmin === true ? (
        <div className="navbar-admin">
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/admin/addproduct">Add Product</Link>
          <Link to="/admin/inventory">Product Inventory</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/analytics">Analytics</Link>
        </div>
      ) : isLoggedIn && currUser.isAdmin === false ? (
        <div className="navbar-wrap">
          <div className="navbar-user-left">
            <div className="navbar-user-itemLeft">
              <SearchBar placeholder={'Search for rock!'} data={products} />
            </div>
            <div
              className="navbar-user-itemLeft"
              onClick={() => dispatch(emptyGuestOrderItem())}
            >
              <Link className="react-link" to="/products">
                Products
              </Link>
            </div>
            <div className="navbar-user-itemLeft">
              <Link className="react-link" to="/orderhistory">
                Past Orders
              </Link>
            </div>
          </div>
          <div className="navbar-logo">
            <div>
              <Link className="react-link" to="/home">
                <img src={Logo1} />
              </Link>
            </div>
          </div>
          <div className="navbar-user-right">
            <div className="navbar-user-itemRight">
              <p>Welcome, {currUser.username}</p>
            </div>
            <div className="navbar-user-itemRight">
              <a href="" className="react-link" onClick={handleClick}>
                Logout
              </a>
            </div>
            <div className="navbar-user-itemRight">
              <Link className="react-link" to={`/editprofile/${userId}`}>
                <PersonIcon />
              </Link>
            </div>
            <div className="navbar-user-itemRight">
              <a
                href="#"
                className="react-link"
                onClick={(ev) => {
                  ev.preventDefault();
                  setCartDrawer(true);
                }}
              >
                <Badge color="secondary" badgeContent={cartTotal}>
                  <ShoppingCartIcon />{' '}
                </Badge>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-wrap">
          <div className="navbar-user-left">
            <div className="navbar-user-itemLeft">
              <SearchBar placeholder={'Search for rock!'} data={products} />
            </div>
            <div className="navbar-user-itemLeft">
              <Link className="react-link" to="/products">
                Products
              </Link>
            </div>
          </div>
          <div className="navbar-logo">
            <Link className="react-link" to="/home">
              <img src={Logo1} />
            </Link>
          </div>
          <div className="navbar-user-right">
            <div className="navbar-user-itemRight">
              <p>Welcome, Guest</p>
            </div>
            <div className="navbar-user-itemRight">
              <Link to="/login" className="react-link">
                Login
              </Link>
            </div>
            <div className="navbar-user-itemRight">
              <a
                href="#"
                className="react-link"
                onClick={(ev) => {
                  ev.preventDefault();
                  setCartDrawer(true);
                }}
              >
                <Badge color="secondary" badgeContent={guestCartTotal}>
                  <ShoppingCartIcon />{' '}
                </Badge>
              </a>
            </div>
          </div>
        </div>
      )}
      <Cart cartOpen={cartDrawer} handleClose={close} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  const orderItems = state.orderItems;
  return {
    isLoggedIn: !!state.auth.id,
    orderItems,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(emptyGuestOrderItem());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
//-------------------------------------------------------------

// REACT-TOASTIFY

// import React from "react";

// function Toastify() {
//   const notify = () => toast.success("item added to cart");

//   return (
//     <div className="App">
//       <Button variant="contained" color="secondary" onClick={notify}>
//         Toastify!
//       </Button>
//       <ToastContainer
//         position="top-right"
//         autoClose={1500}
//         hideProgressBar
//         newestOnTop={true}
//         closeonClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         transition={Sdivde}
//       />
//     </div>
//   );
// }

// export default Toastify;
