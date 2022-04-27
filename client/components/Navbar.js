import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logout, emptyGuestOrderItem } from '../store';
import { ToastContainer, toast, Sdivde } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Cart from './Cart';
import Logo1 from '../../public/images/UNPLGD-nav-logo.png';
import Logo2 from '../../public/images/UNPLGD-logo2v2.png';
import AdminTopBar from './Admin/AdminTopBar';
import AdminSideBar from './Admin/AdminSideBar';
import AdminHome from './Admin/AdminHome';

const Navbar = ({ handleClick, isLoggedIn, orderItems }) => {
  //-------------------Mapping State---------------------//
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id) || '';
  const currUser = useSelector((state) => state.users.find((user) => user.id === userId)) || {};

  const matchingOrder = useSelector((state) => 
    state.orders.find((order) => order.userId === userId && order.isOrdered === false)) || {};
  const matchingOrderItems = orderItems.filter((orderItem) => orderItem.orderId === matchingOrder.id) || [];
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
        <div>
          <AdminTopBar />
        </div>
      ) : isLoggedIn && currUser.isAdmin === false ? (
        <div className="navbar-wrap">
          <div className="navbar-user-left">
            <div className="navbar-user-itemLeft">
              <SearchBar placeholder={'Search for rock!'} data={products} />
            </div>
            <div className="navbar-user-itemLeft-img">
              {' '}
              <Link className="react-link" to="/home">
                <img src={Logo2} />
              </Link>
            </div>
            <div
              className="navbar-user-itemLeft"
              onClick={() => dispatch(emptyGuestOrderItem())}
            >
              <Link className="react-link" to="/products">
                <span className="nb-underline">PRODUCTS</span>
              </Link>
            </div>
            <div className="navbar-user-itemLeft">
              <Link className="react-link" to="/orderhistory">
                <span className="nb-underline">ORDERS</span>
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
            <div className="navbar-user-itemRight-name">
              <p>WELCOME, {currUser.username}</p>
            </div>
            <div className="navbar-user-itemRight">
              <a href="" className="react-link" onClick={handleClick}>
                <span className="nb-underline">LOGOUT</span>
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
                <Badge color='error' badgeContent={cartTotal}>
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
            <div className="navbar-user-itemLeft-img">
              {' '}
              <Link className="react-link" to="/home">
                <img src={Logo2} />
              </Link>
            </div>
            <div className="navbar-user-itemLeft">
              <Link className="react-link" to="/products">
                <span className="nb-underline">PRODUCTS</span>
              </Link>
            </div>
          </div>
          <div className="navbar-logo">
            <Link className="react-link" to="/home">
              <img src={Logo1} />
            </Link>
          </div>
          <div className="navbar-user-right">
            <div className="navbar-user-itemRight-name">
              <p>WELCOME, GUEST</p>
            </div>
            <div className="navbar-user-itemRight">
              <Link to="/login" className="react-link">
                <span className="nb-underline">LOGIN</span>
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
                <Badge color='error' badgeContent={guestCartTotal}>
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

