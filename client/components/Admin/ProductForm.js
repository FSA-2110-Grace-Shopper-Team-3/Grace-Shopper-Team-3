import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProd, createProd } from '../../store';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { Formik, Form, useField, Field } from 'formik';
import { TextField, Button, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import * as yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth={true}
      {...field}
      helperText={errorText}
      error={!!errorText}
      className="textfield"
      style={{ width: 320 }}
      id="outlined-basic"
      label={label}
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

const ProductForm = () => {
  const { id } = useParams();
  const routeMatch = useRouteMatch();

  const products = useSelector((state) => state.products);

  const product = products.find((product) => product.id === id) || {};

  const allCategories = [
    ...new Set(
      products.map((product) => product.category).filter((product) => !!product)
    ),
  ];

  const history = useHistory();
  const dispatch = useDispatch();

  const prodDefaultImg =
    'https://www.nogapinsulation.com.au/wp-content/uploads/2019/12/product-coming-soon-no-gap-insulation.jpg';

  const notify = () =>
    toast.success(productExists ? 'product updated' : 'product added');

  const productExists = routeMatch.params.id;

  return (
    <div className="sp">
      {injectStyle()}
      <div className="sp-left">
        <div>
          <img
            className="sp-img"
            src={productExists ? product.img : prodDefaultImg}
            style={{ width: 350 }}
          />
        </div>
      </div>
      <div className="sp-right">
        <div className="sp-right-wrap">
          <div className="sp-desc">
            <div className="formik">
              <Formik
                initialValues={{
                  id: product.id,
                  category: product.category || '',
                  brand: productExists ? product.brand : '',
                  model: productExists ? product.model : '',
                  price: productExists ? product.price : '',
                  description: productExists ? product.description : '',
                  quantity: productExists ? product.quantity : 1,
                  img: productExists ? product.img : prodDefaultImg,
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                  setSubmitting(true); // before async call
                  productExists
                    ? dispatch(updateProd(data))
                    : dispatch(createProd(data));
                  setSubmitting(false); //after async call
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div>
                      <h4>
                        {productExists ? 'Edit Product Info' : 'Add Product'}
                      </h4>
                    </div>
                    <Grid container direction={'column'} spacing={3}>
                      <Grid item>
                        <MyTextField label="Brand" name="brand" type="input" />
                      </Grid>
                      <Grid item>
                        <MyTextField label="Model" name="model" type="input" />
                      </Grid>
                      <Grid item>
                        <MyTextField label="Price" name="price" type="input" />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          label="Description"
                          name="description"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          label="Quantity"
                          name="quantity"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <MyTextField
                          label="Photo URL"
                          name="img"
                          type="input"
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          name="category"
                          as={TextField}
                          select
                          fullWidth={true}
                          className="textfield"
                          style={{ width: 320 }}
                          id="outlined-basic"
                          variant="outlined"
                        >
                          {allCategories.map((category, idx) => {
                            return (
                              <MenuItem key={idx} value={category}>
                                {category}
                              </MenuItem>
                            );
                          })}
                        </Field>
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

export default ProductForm;
