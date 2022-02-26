// // import React, { Component } from 'react';
// // import { connect } from 'react-redux';
// // import { createProd } from '../store';
// // import { ToastContainer, toast, Slide } from 'react-toastify';
// // import { injectStyle } from 'react-toastify/dist/inject-style';

// // class AddProduct extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       brand: '',
// //       model: '',
// //       price: '',
// //       img: '',
// //       description: '',
// //       quantity: 1,
// //       category: '',
// //       error: '',
// //     };
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }

// //   handleChange(evt) {
// //     this.setState({
// //       [evt.target.name]: evt.target.value,
// //     });
// //   }

// //   async handleSubmit(evt) {
// //     evt.preventDefault();
// //     try {
// //       await this.props.createProduct({ ...this.state });
// //     } catch (er) {
// //       this.setState({ error: er.response.data });
// //     }
// //   }

// //   render() {
// //     const { brand, model, price, img, description, quantity, category, error } =
// //       this.state;
// //     const { handleSubmit, handleChange } = this;
// //     const { products } = this.props;

// //     const allCategories = [
// //       ...new Set(
// //         products
// //           .map((product) => product.category)
// //           .filter((product) => !!product)
// //       ),
// //     ];

// //     const notify = () => toast.success('product added');

// //     const handleOnClick = () => {
// //       notify();
// //       // USE HISTORY TO REDIRECT TO INVENTORY PAGE -> set timout 2000 ms
// //     };

// //     return (
// //       <div>
// //         {!!error && <pre>{JSON.stringify(error, null, 2)}</pre>}
// //         {injectStyle()}
// //         <h4>Add Product</h4>
// //         <form id="add-product" onSubmit={handleSubmit}>
// //           <input
// //             name="brand"
// //             onChange={handleChange}
// //             value={brand}
// //             placeholder="Brand"
// //           />
// //           <input
// //             name="model"
// //             onChange={handleChange}
// //             value={model}
// //             placeholder="Model"
// //           />
// //           <input
// //             name="price"
// //             onChange={handleChange}
// //             value={price}
// //             placeholder="Price"
// //           />
// //           <input
// //             name="img"
// //             onChange={handleChange}
// //             value={img}
// //             placeholder="Image"
// //           />
// //           <input
// //             name="description"
// //             onChange={handleChange}
// //             value={description}
// //             placeholder="Description"
// //           />
// //           <input
// //             name="quantity"
// //             onChange={handleChange}
// //             value={quantity}
// //             placeholder="Quantity"
// //           />
// //           <select
// //             name="category"
// //             value={category || ''}
// //             onChange={handleChange}
// //           >
// //             <option value="">SELECT A CATEGORY</option>
// //             {allCategories.map((category) => {
// //               return (
// //                 <option key={category} value={category}>
// //                   {category}
// //                 </option>
// //               );
// //             })}
// //           </select>
// //           <button type="submit" onClick={handleOnClick}>
// //             Add Product
// //           </button>
// //           <ToastContainer
// //             position="top-center"
// //             autoClose={1500}
// //             hideProgressBar
// //             newestOnTop={true}
// //             closeOnClick
// //             rtl={false}
// //             pauseOnFocusLoss
// //             draggable
// //             transition={Slide}
// //           />
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     products: state.products,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     createProduct: (product) => {
// //       dispatch(createProd(product));
// //     },
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateProd } from '../store';
// import { useHistory, useParams } from 'react-router';
// import { Formik, Form, useField } from 'formik';
// import { TextField, Button, Grid } from '@material-ui/core';
// import { ToastContainer, toast, Slide } from 'react-toastify';
// import { injectStyle } from 'react-toastify/dist/inject-style';
// import * as yup from 'yup';

// const MyTextField = ({ placeholder, ...props }) => {
//   const [field, meta] = useField(props);
//   const errorText = meta.error && meta.touched ? meta.error : '';
//   return (
//     <TextField
//       fullWidth={true}
//       placeholder={placeholder}
//       {...field}
//       helperText={errorText}
//       error={!!errorText}
//       className="textfield"
//       style={{ width: 320 }}
//       variant="outlined"
//     />
//   );
// };

// const validationSchema = yup.object({
//   category: yup.string().required('category is required'),
//   brand: yup.string().required('brand is required'),
//   model: yup.string().required('model is required'),
//   price: yup.string().required('price is required'),
//   description: yup.string().required('please enter a description'),
//   quantity: yup
//     .number()
//     .required('please enter a quantity')
//     .positive()
//     .integer(),
//   img: yup.string(),
// });

// const AddProduct = () => {
//   const { id } = useParams();
//   const product =
//     useSelector((state) =>
//       state.products.find((product) => product.id === id)
//     ) || {};

//   const history = useHistory();
//   const dispatch = useDispatch();

//   const notify = () => toast.success('product updated');

//   return (
//     <div className="sp">
//       {injectStyle()}
//       <div className="sp-left">
//         <div>
//           <img
//             className="sp-img"
//             src="https://www.nogapinsulation.com.au/wp-content/uploads/2019/12/product-coming-soon-no-gap-insulation.jpg"
//             style={{ width: 400 }}
//           />
//         </div>
//       </div>
//       <div className="sp-right">
//         <div className="sp-right-wrap">
//           <div className="sp-desc">
//             <div className="formik">
//               <Formik
//                 initialValues={{
//                   id: '',
//                   category: '',
//                   brand: '',
//                   model: '',
//                   price: '',
//                   description: '',
//                   quantity: 10,
//                   img: '',
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(data, { setSubmitting }) => {
//                   setSubmitting(true); // before async call
//                   dispatch(updateProd(data));
//                   setSubmitting(false); //after async call
//                 }}
//               >
//                 {({ isSubmitting }) => (
//                   <Form>
//                     <div>
//                       <h4>Add Product</h4>
//                     </div>
//                     <Grid container direction={'column'} spacing={3}>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Category"
//                           name="category"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Brand"
//                           name="brand"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Model"
//                           name="model"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Price"
//                           name="price"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Description"
//                           name="description"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Quantity"
//                           name="quantity"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <MyTextField
//                           placeholder="Photo URL"
//                           name="img"
//                           type="input"
//                         />
//                       </Grid>
//                       <Grid item>
//                         <Button
//                           onClick={notify}
//                           disabled={isSubmitting}
//                           type="submit"
//                           color="primary"
//                         >
//                           SUBMIT
//                         </Button>
//                         <Button
//                           type="button"
//                           onClick={() => history.push('/admin/inventory')}
//                           color="primary"
//                         >
//                           CANCEL
//                         </Button>
//                         <ToastContainer
//                           position="top-center"
//                           autoClose={1500}
//                           hideProgressBar
//                           newestOnTop={true}
//                           closeOnClick
//                           rtl={false}
//                           pauseOnFocusLoss
//                           draggable
//                           transition={Slide}
//                         />
//                       </Grid>
//                     </Grid>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
