import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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
  //-------------------Guest Cart Functionality---------------------//

  const guestOrderItems = JSON.parse(localStorage.getItem('orderitems'));

  // useEffect(() => {}, [guestOrderItems]);

  const GuestOrderItems = JSON.parse(localStorage.getItem('orderitems'));
  const guestCartTotal = GuestOrderItems.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  console.log('navbar rendered!');
  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav className="navbar">
        {isLoggedIn && currUser.isAdmin === true ? (
          <div>
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
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({cartTotal})</Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({guestCartTotal})</Link>
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
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
