import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  addOrderItem,
  editOrderItem,
  addGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
  const username = useSelector((state) => state.auth.username) || '';
  let products = useSelector((state) => state.products);
  const orderItems = useSelector((state) => state.orderItems) || [];

  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.id) || '';

  const orders = useSelector((state) => state.orders) || [];

  const matchOrder =
    orders.find((order) => order.userId === id && order.isOrdered === false) ||
    {};

  const match = useRouteMatch();

  //-------------------Guest Cart Functionality---------------------//

  const guestCart = useSelector((state) => state.guestOrderItems) || [];

  useEffect(() => {
    localStorage.setItem('orderitems', JSON.stringify(guestCart));
  }, [guestCart]);

  //-------------------Guest to Login Cart Functionality---------------------//

  const guestToUserCart =
    guestCart.map((guestItem) => {
      const item = { ...guestItem, orderId: matchOrder.id, userId: id };
      return item;
    }) || [];

  useEffect(() => {
    if (id) {
      guestToUserCart.forEach((guestCartItem) => {
        const itemFound = orderItems.find(
          (orderItem) => orderItem.id === guestCartItem.id
        );

        if (!itemFound) {
          dispatch(addOrderItem(guestCartItem));
        }
      });
    }
  }, []);

  const [instruments, setInstruments] = useState(products);

  const saveInstrument = (event) => {
    if (event.target.value === 'all') {
      setInstruments(products);
    }
    if (event.target.value === 'guitars') {
      let guitarProducts = [...products].filter(
        (product) => product.category === 'Guitar'
      );
      setInstruments(guitarProducts);
    }

    if (event.target.value === 'drums') {
      let drumProducts = [...products].filter(
        (product) => product.category === 'Drum'
      );
      setInstruments(drumProducts);
    }
    if (event.target.value === 'cellos') {
      let celloProducts = [...products].filter(
        (product) => product.category === 'Cello'
      );
      setInstruments(celloProducts);
    }
    if (event.target.value === 'pianos') {
      let pianoProducts = [...products].filter(
        (product) => product.category === 'Piano'
      );
      setInstruments(pianoProducts);
    }
    if (event.target.value === 'accessories') {
      let accesoryProducts = [...products].filter(
        (product) => product.category === 'Accesory'
      );
      setInstruments(accesoryProducts);
    }
  };

  const currentInstruments = !instruments.length ? products : instruments;

  const [myInstrument, setMyInstrument] = useState('');

  return (
    <div>
      <div>
        <h3>Welcome, {username ? username : 'Guest!'}</h3>
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setMyInstrument(event.target.value);
          }}
        />

        <form>
          <select onChange={saveInstrument}>
            <option value="all">All</option>
            <option value="drums">drums</option>
            <option value="guitars">guitars</option>
            <option value="cellos">cellos</option>
            <option value="pianos">pianos</option>
            <option value="accessories">accesories</option>
          </select>
        </form>
      </div>
      {currentInstruments
        .filter((val) => {
          if (setInstruments === '') {
            return val;
          } else if (
            val.brand.toLowerCase().includes(myInstrument.toLowerCase())
          ) {
            return val;
          } else if (
            val.model.toLowerCase().includes(myInstrument.toLowerCase())
          ) {
            return val;
          }
        })
        .map((product) => {
          return (
            <div key={product.id}>
              {
                <Link to={`/products/${product.id}`}>
                  {product.brand} - {product.model} ---> Stock:{' '}
                  {product.quantity}{' '}
                </Link>
              }
              <button
                onClick={() => {
                  if (!id) {
                    const guestOrderItem = guestCart.find(
                      (orderItem) =>
                        orderItem.productId === product.id &&
                        orderItem.userId === null
                    );
                    guestOrderItem
                      ? dispatch(
                          editGuestOrderItem({
                            ...guestOrderItem,
                            id: guestOrderItem.id,
                            quantity: guestOrderItem.quantity + 1,
                          })
                        )
                      : dispatch(
                          addGuestOrderItem({
                            productId: product.id,
                            userId: null,
                            id: uuidv4(),
                            quantity: 1,
                          })
                        );
                  } else {
                    const orderItem = orderItems.find(
                      (orderItem) =>
                        orderItem.productId === product.id &&
                        orderItem.orderId === matchOrder.id
                    );
                    orderItem
                      ? dispatch(
                          editOrderItem({
                            id: orderItem.id,
                            quantity: orderItem.quantity + 1,
                            userId: id,
                          })
                        )
                      : dispatch(
                          addOrderItem({
                            productId: product.id,
                            orderId: matchOrder.id,
                            userId: id,
                          })
                        );
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
