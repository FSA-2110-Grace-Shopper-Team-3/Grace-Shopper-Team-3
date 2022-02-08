import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = () => {
  // const {username} = props

  const username = useSelector((state) => state.auth.username);
  const products = useSelector((state) => state.products);
  console.log(products);

  return <div>{/* <h3>Welcome, {username}</h3> */}</div>;
};

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     username: state.auth.username,
//     products: state.products
//   }
// }

export default Home;
