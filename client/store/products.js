import axios from 'axios';

//TO DO: DELETE, ADD, EDIT product

/**
 * ACTION TYPES
 */
const GET_PROD = 'GET_PROD';
const CREATE_PROD = 'CREATE_PROD';
const DELETE_PROD = 'DELETE_PROD';
const UPDATE_PROD = 'UPDATE_PROD';

/**
 * ACTION CREATORS
 */
const _getProd = (products) => {
  return {
    type: GET_PROD,
    products,
  };
};

const _createProd = (product) => {
  return {
    type: CREATE_PROD,
    product,
  };
};

const _deleteProd = (id) => {
  return {
    type: DELETE_PROD,
    id,
  };
};

const _updateProd = (product) => {
  return {
    type: UPDATE_PROD,
    product,
  };
};

/**
 * THUNK CREATORS
 */
export const getProd = () => {
  return async (dispatch) => {
    const products = (await axios.get('/api/products')).data;
    dispatch(_getProd(products));
  };
};

export const createProd = (product) => {
  return async (dispatch) => {
    const newProduct = (await axios.post('/api/products', product)).data;
    dispatch(_createProd(newProduct));
  };
};

export const deleteProd = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/products/${id}`);
    dispatch(_deleteProd(id));
  };
};

export const updateProd = (product) => {
  return async (dispatch) => {
    product = (await axios.put(`/api/products/${product.id}`, product)).data;
    dispatch(_updateProd(product));
  };
};

/**
 * REDUCER
 */

export const products = (state = [], action) => {
  switch (action.type) {
    case GET_PROD:
      return action.products;
    case CREATE_PROD:
      return [...state, action.product];
    case DELETE_PROD:
      return state.filter((product) => product.id !== action.id);
    case UPDATE_PROD:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    default:
      return state;
  }
};
