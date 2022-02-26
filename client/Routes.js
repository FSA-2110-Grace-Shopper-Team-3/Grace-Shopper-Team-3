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
import AdminUserList from './components/Admin/AdminUserList';
import AdminInventory from './components/Admin/AdminInventory';
import AdminOrders from './components/Admin/AdminOrders';
import AdminUserOrder from './components/Admin/AdminUserOrder';
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
          <Switch>
            <ScrollToTop>
              <Route exact path="/home" component={FrontPage} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/orderplaced" component={OrderPlaced} />
              <Route exact path="/orderhistory" component={OrderHistory} />
              <Route exact path="/editprofile/:id" component={EditUser} />
              <Route exact path="/products/sort/:sortBy" component={Products} />
              <Route exact path="/products/:id" component={SingleProduct} />
              {/* <Redirect to="/products" /> */}
            </ScrollToTop>
          </Switch>
        ) : (
          <Switch>
            <ScrollToTop>
              <Route exact path="/" component={FrontPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/home" component={FrontPage} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/sort/:sortBy" component={Products} />
              <Route exact path="/products/:id" component={SingleProduct} />
            </ScrollToTop>
            {/* <Redirect to="/products" /> */}
          </Switch>
        )}
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
