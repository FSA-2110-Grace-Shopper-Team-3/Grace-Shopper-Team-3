import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import OrderPlaced from './components/OrderPlaced';
import Users from './components/Users';
import ProductInventory from './components/ProductInventory';
import Orders from './components/Orders';
import EditUser from './components/EditUser';
import ProductForm from './components/ProductForm';
import OrderHistory from './components/OrderHistory';
import FrontPage from './components/FrontPage/FrontPage';

import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';

import AdminUserList from './components/Admin/AdminUserList';
import AdminInventory from './components/Admin/AdminInventory';
import AdminOrders from './components/Admin/AdminOrders';
import AdminUserOrder from './components/Admin/AdminUserOrder';

import { ToastContainer, Slide } from 'react-toastify';


import ScrollToTop from './components/ScrollToTop';
import AdminAnalytics from './components/Admin/AdminAnalytics';
import Admin from './components/Admin';

import {
  me,
  getProd,
  getOrderItems,
  getOrders,
  getUsers,
  getGuestOrderItems,
} from './store';

/**
 * COMPONENT
 */

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.props.loadInitialData();
    }
    if (prevProps.orderItems.length !== this.props.orderItems.length) {
      this.props.loadInitialData();
    }
  }

  render() {
    const { isLoggedIn, users } = this.props;

    const currUser = users.find((user) => user.id === this.props.auth.id) || {};

    return (
      <div>
        {isLoggedIn && currUser.isAdmin === true ? (
          <Switch>
            <Route exact path="/admin/users" component={AdminUserList} />
            <Route exact path="/admin/users/:id" component={EditUser} />
            <Route exact path="/admin/inventory" component={AdminInventory} />
            <Route exact path="/admin/inventory/:id" component={ProductForm} />
            <Route exact path="/admin/addproduct" component={ProductForm} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/orders" component={AdminOrders} />
            <Route exact path="/admin/analytics" component={AdminAnalytics} />
            <Route exact path="/admin/orders/:id" component={AdminUserOrder} />
            <Redirect to="/admin" />
          </Switch>
        ) : isLoggedIn && currUser.isAdmin === false ? (
          <ScrollToTop>
            <Switch>
              <Route path="/products/sort/:sortBy" component={Products} />
              <Route path="/products/:id" component={SingleProduct} />
              <Route path="/editprofile/:id" component={EditUser} />
              <Route path="/products" component={Products} />
              <Route path="/orderplaced" component={OrderPlaced} />
              <Route path="/orderhistory" component={OrderHistory} />
              <Route path="/home" component={FrontPage} />
              <Route exact path="/" component={FrontPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollToTop>
        ) : (
          <ScrollToTop>
            <Switch>
              <Route path="/products/sort/:sortBy" component={Products} />
              <Route path="/products/:id" component={SingleProduct} />
              <Route path="/products" component={Products} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/home" component={FrontPage} />
              <Route exact path="/" component={FrontPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollToTop>
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          transition={Slide}
          limit={5}
        />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    ...state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(getProd());
      dispatch(getOrderItems());
      dispatch(me());
      dispatch(getOrders());
      dispatch(getUsers());
      dispatch(getGuestOrderItems());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
