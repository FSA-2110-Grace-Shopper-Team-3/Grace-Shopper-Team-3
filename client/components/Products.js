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
        (product) => product.category === 'Accessory'
      );
      setInstruments(accesoryProducts);
    }
  };

  const currentInstruments = !instruments.length ? products : instruments;



  // ------- Not working sorting by price, model etc.
  // const [productFilter, setProductFilter] = useState(products);

  // const saveProductFilter = (event) => {
  //   if (event.target.value === 'lowToHigh') {
  //     let lowPrice = [...instruments].sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //     setProductFilter(lowPrice);
  //   }
  //   if (event.target.value === 'highToLow') {
  //     let highPrice = [...instruments].sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //     setProductFilter(highPrice);
  //   }
  // };


  return (
    <div className="pds">
      <div className="pds-filter">
        <h2>PRODUCTS</h2>
      </div>
      <div>
        <div>
          <h3>Welcome, {username ? username : 'Guest!'}</h3>
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
          {/* <form>
          <select onChange={saveProductFilter}>
            <option value="lowToHigh">Sort by price - low to high</option>
            <option value="highToLow">Sort by price - high to low</option>
          </select>
        </form> */}

          {/* <div className="sortinglinks">
          <Link to={`/products/sort/guitars`}>Guitars </Link>
          <Link to={`/products/sort/drums`}>Drums </Link>
          <Link to={`/products/sort/cellos`}>Cellos </Link>
          <Link to={`/products/sort/pianos`}>Pianos </Link>
          <Link to={`/products/sort/accesories`}>Accesories </Link>
          <Link to={`/products/sort/brand`}>sort by brand </Link>
          <Link to={`/products/sort/model`}>sort by model</Link>
          <Link to={`/products/sort/lowtohighprice`}>
            sort by price low to high
          </Link>
          <Link to={`/products/sort/hightolowprice`}>sort by high to low</Link>
        </div> */}
        </div>
        <div className="pds-list">
          {currentInstruments.map((product) => {
            return (
              <div key={product.id} className="pds-product">
                {
                  <div className="pds-product-wrapper">
                    <Link to={`/products/${product.id}`}>
                      <div>
                        <img src={product.img} />
                      </div>
                      <div className="pds-product-name">
                        <div>
                          {product.category} - {product.brand}
                        </div>
                        <div>{product.model}</div>
                      </div>
                    </Link>
                  </div>
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
      </div>

    </div>
  );
};

export default Products;
