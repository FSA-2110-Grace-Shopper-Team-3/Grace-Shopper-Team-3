import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import {
  addOrderItem,
  editOrderItem,
  addGuestOrderItem,
  editGuestOrderItem,
} from '../store';
import { v4 as uuidv4 } from 'uuid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PageviewIcon from '@material-ui/icons/Pageview';
import Rating from '@material-ui/lab/Rating';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import ReactPaginate from 'react-paginate';
import Email from './Email';

const Products = () => {
  const notify = () => toast.success('added to cart!');
  const username = useSelector((state) => state.auth.username) || '';
  let products = useSelector((state) => state.products) || [];
  const orderItems = useSelector((state) => state.orderItems) || [];

  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.id) || '';

  const orders = useSelector((state) => state.orders) || [];

  const matchOrder =
    orders.find((order) => order.userId === id && order.isOrdered === false) ||
    {};

  let match = useRouteMatch();

  let location = useLocation();

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

  let currentInstruments = !instruments.length ? products : instruments;

  let [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setPageNumber(0);
  }, []);

  const prodsPerPage = 16;
  const pagesVisited = pageNumber * prodsPerPage;

  const guitars = products.filter((product) => product.category === 'Guitar');
  const drums = products.filter((product) => product.category === 'Drum');
  const cellos = products.filter((product) => product.category === 'Cello');
  const pianos = products.filter((product) => product.category === 'Piano');
  const accesories = products.filter(
    (product) => product.category === 'Accessory'
  );

  let pageCount = Math.ceil(products.length / prodsPerPage);
  const guitarPageCount = Math.ceil(guitars.length / prodsPerPage);
  const drumPageCount = Math.ceil(drums.length / prodsPerPage);
  const celloPageCount = Math.ceil(cellos.length / prodsPerPage);
  const pianoPageCount = Math.ceil(pianos.length / prodsPerPage);
  const accesoriesPageCount = Math.ceil(accesories.length / prodsPerPage);

  if (match.params.sortBy) {
    const field = match.params.sortBy;
    if (field === 'guitars') {
      currentInstruments = [...products].filter(
        (product) => product.category === 'Guitar'
      );
      pageCount = guitarPageCount;
    } else if (field === 'drums') {
      currentInstruments = [...products].filter(
        (product) => product.category === 'Drum'
      );
      pageCount = drumPageCount;
    } else if (field === 'cellos') {
      currentInstruments = [...products].filter(
        (product) => product.category === 'Cello'
      );
      pageCount = celloPageCount;
    } else if (field === 'accessories') {
      currentInstruments = [...products].filter(
        (product) => product.category === 'Accessory'
      );
      pageCount = accesoriesPageCount;
    } else if (field === 'pianos') {
      currentInstruments = [...products].filter(
        (product) => product.category === 'Piano'
      );
      pageCount = pianoPageCount;
    } else {
      currentInstruments = [...products];
    }
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // PAGINATE START
  const displayProducts = currentInstruments
    .slice(pagesVisited, pagesVisited + prodsPerPage)
    .map((product) => {
      return (
        <div key={product.id} className="pds-product">
          <div className="pds-product-wrapper">
            <div>
              <img src={product.img} />
            </div>
            <div className="pds-product-name">
              <div className="pds-product-model">
                <h3>{product.model}</h3>
              </div>
              <div className="pds-product-brand">{product.brand}</div>
              <div className="pds-product-price">${product.price}</div>
              <Rating
                name="disabled"
                value={product.rating}
                disabled
                className="rating"
              />
            </div>
          </div>
          <div className="pds-product-cover">
            <div className="pds-product-icon">
              <ShoppingCartIcon
                onClick={() => {
                  {
                    notify();
                  }
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
              />
            </div>
            <Link to={`/products/${product.id}`} className="react-link">
              <div className="pds-product-icon">
                <PageviewIcon />
              </div>
            </Link>
          </div>
        </div>
      );
    });

  //PAGINATE END

  return (
    <div className="pds">
      {injectStyle()}
      <div className="pds-filter">
        <h1>PRODUCTS</h1>
      </div>
      {/* <Email /> */}
      <div className="pds-ctg">
        <div className="pds-ctg-wrap">
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/`}>
              <h3>All</h3>
            </Link>
          </div>
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/sort/guitars`}>
              <h3>Guitars</h3>
            </Link>
          </div>
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/sort/drums`}>
              <h3>Drums</h3>{' '}
            </Link>
          </div>
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/sort/cellos`}>
              <h3>Cellos</h3>{' '}
            </Link>
          </div>
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/sort/pianos`}>
              <h3>Pianos</h3>{' '}
            </Link>
          </div>
          <div className="pds-single-ctg" onClick={() => setPageNumber(0)}>
            <Link to={`/products/sort/accessories`}>
              <h3>Accessories</h3>{' '}
            </Link>
          </div>
        </div>
      </div>
      <div className="pds-list">
        {displayProducts}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          forcePage={pageNumber}
        />
      </div>
    </div>
  );
};

export default Products;
