import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logout, emptyGuestOrderItem } from '../store';

const Navbar = ({ handleClick, isLoggedIn, orderItems }) => {
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
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <SearchBar placeholder={'Search for rock!'} data={products} />
              </li>
              <li>
                <Link to="/orderhistory">Past Orders</Link>
              </li>
            </ul>
            <ul className="navbar-ul">
              <li>
                <p>Welcome, {currUser.username}</p>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
              <li>
                <Link to={`/editprofile/${userId}`}>Edit Profile</Link>
              </li>
              <li>
                <Link to="/cart">Cart ({cartTotal})</Link>
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
                <Link to="/cart">Cart ({guestCartTotal})</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <hr />
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
