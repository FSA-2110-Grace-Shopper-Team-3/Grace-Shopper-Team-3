import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PROD = 'GET_PROD'

/**
 * ACTION CREATORS
 */
const _getProd = products => ({type: GET_PROD, products})

/**
 * THUNK CREATORS
 */
export const getProd = () => {
  return async(dispatch) => {
    const products = (await axios.get('/api/products')).data;
    dispatch(_getProd(products));
  }
}

/**
 * REDUCER
 */

export const products = (state = [], action) => {
  switch (action.type) {
    case GET_PROD:
      return action.products
    default:
      return state
  }
}