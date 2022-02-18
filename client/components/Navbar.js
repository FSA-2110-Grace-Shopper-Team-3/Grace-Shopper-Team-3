import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logout, emptyGuestOrderItem } from '../store';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Cart from './Cart';

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
  //-------------------Guest Cart Functionality---------------------//

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

  //-------------------Cart Drawer Functionality---------------------//
  const [cartDrawer, setCartDrawer] = useState(false);

  const close = () => {
    setCartDrawer(false);
  };

  return (
    <div>
      <nav className="navbar">
        {isLoggedIn && currUser.isAdmin === true ? (
          <div className="navbar-admin">
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/admin/inventory">Product Inventory</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/settings">Settings</Link>
            <Link to="/admin/analytics">Analytics</Link>
          </div>
        ) : isLoggedIn && currUser.isAdmin === false ? (
          <div className="navbar-user">
            <ul className="navbar-ul">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li onClick={() => dispatch(emptyGuestOrderItem())}>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/orderhistory">Past Orders</Link>
              </li>
              <li>
                <SearchBar placeholder={'Search for rock!'} data={products} />
              </li>
            </ul>
            <ul className="navbar-ul">
              <li>
                <p>Welcome, {currUser.username}</p>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Logout
                </a>
              </li>
              <li>
                <Link to={`/editprofile/${userId}`}>
                  <PersonIcon />
                </Link>
              </li>
              <li>
                <a href="#" onClick={() => setCartDrawer(true)}>
                  <Badge color="secondary" badgeContent={cartTotal}>
                    <ShoppingCartIcon />{' '}
                  </Badge>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-guest">
            <ul className="navbar-ul">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <SearchBar placeholder={'Search for rock!'} data={products} />
              </li>
            </ul>
            <ul className="navbar-ul">
              <li>
                <p>Welcome, Guest!</p>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>{' '}
              </li>
              <li>
                <a href="#" onClick={() => setCartDrawer(true)}>
                  <Badge color="secondary" badgeContent={guestCartTotal}>
                    <ShoppingCartIcon />{' '}
                  </Badge>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Cart cartOpen={cartDrawer} handleClose={close} />
      {/* {cartDrawer && setCartDrawer(false)} */}
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
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         transition={Slide}
//       />
//     </div>
//   );
// }

// export default Toastify;
