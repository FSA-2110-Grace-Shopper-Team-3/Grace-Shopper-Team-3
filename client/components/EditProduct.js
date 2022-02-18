import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProd } from '../store';
import { useHistory, useParams } from 'react-router';
import { Formik, Form, useField } from 'formik';
import { TextField, Button, Grid } from '@material-ui/core';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import * as yup from 'yup';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth={true}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      className="textfield"
      style={{ width: 320 }}
      variant="outlined"
    />
  );
};

const validationSchema = yup.object({
  category: yup.string().required('category is required'),
  brand: yup.string().required('brand is required'),
  model: yup.string().required('model is required'),
  price: yup.string().required('price is required'),
  description: yup.string().required('description is required'),
  quantity: yup.number().required().positive().integer(),
  img: yup.string(),
});

const EditProduct = () => {
  const { id } = useParams();
  const product =
    useSelector((state) =>
      state.products.find((product) => product.id === id)
    ) || {};

  const history = useHistory();
  const dispatch = useDispatch();

  const notify = () => toast.success('product updated');

  return (
    <div className="sp">
      {injectStyle()}
      <div className="sp-left">
        <div>
          <img className="sp-img" src={product.img} />
        </div>
      </div>
      <div className="sp-right">
        <div className="sp-right-wrap">
          <div className="sp-desc">
            <div className="formik">
              <Formik
                initialValues={{
                  id: product.id || 1,
                  category: product.category || '',
                  brand: product.brand || '',
                  model: product.model || '',
                  price: product.price || '',
                  description: product.description || '',
                  quantity: product.quantity || 1,
                  img:
                    product.img ||
                    'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png',
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                  setSubmitting(true); // before async call
                  dispatch(updateProd(data));
                  setSubmitting(false); //after async call
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div>
                      <h4>Edit Product Info</h4>
                    </div>
                    <Grid container direction={'column'} spacing={3}>
                      <Grid item>
                        <MyTextField
                          placeholder="Category"
                          name="category"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Brand"
                          name="brand"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Model"
                          name="model"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Price"
                          name="price"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Description"
                          name="description"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Quantity"
                          name="quantity"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          placeholder="Photo URL"
                          name="img"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={notify}
                          disabled={isSubmitting}
                          type="submit"
                          color="primary"
                        >
                          SUBMIT
                        </Button>
                        <Button
                          type="button"
                          onClick={() => history.push('/admin/inventory')}
                          color="primary"
                        >
                          CANCEL
                        </Button>
                        <ToastContainer
                          position="top-center"
                          autoClose={1500}
                          hideProgressBar
                          newestOnTop={true}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          transition={Slide}
                        />
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
