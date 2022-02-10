import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, orderItems }) => {
  const userId = useSelector((state) => state.auth.id);

  const currUser =
    useSelector((state) => state.users.find((user) => user.id === userId)) ||
    {};

  const matchingOrder =
    useSelector((state) =>
      state.orders.find(
        (order) => order.userId === userId && order.isOrdered === false
      )
    ) || {};

  const matchingOrderItems = orderItems.filter(
    (orderItem) => orderItem.orderId === matchingOrder.id
  );

  const cartTotal = matchingOrderItems.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav className="navbar">
        {isLoggedIn && currUser.isAdmin === false ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        {/* {isLoggedIn && currUser.isAdmin === true ? (
          <div>
            <Link to="/admin">Admin Panel</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          ''
        )} */}

        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/products">Products</Link>
        </div>
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/cart">Cart ({cartTotal})</Link>
        </div>
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
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
