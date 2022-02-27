import React, { useEffect } from 'react';
import { updateUser } from '../store/users';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Formik, Form, useField } from 'formik';
import { TextField, Button, Grid } from '@material-ui/core';
import * as yup from 'yup';

const MyTextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth={true}
      {...field}
      helperText={errorText}
      error={!!errorText}
      className="textfield"
      style={{ width: 350 }}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
    />
  );
};

const validationSchema = yup.object({
  username: yup.string().required('username is required').max(20),
  password: yup.string().min(3).max(15),
  email: yup.string().required('email is required').max(25),
  img: yup.string().max(200),
});

const EditUser = () => {
  const { id } = useParams();
  const currUser = useSelector((state) => state.users.find((user) => user.id === id) || {});
  const history = useHistory();
  const dispatch = useDispatch();

  //-------------------Finding Logged In User---------------------//
  const users = useSelector((state) => state.users) || '';
  const currPassword = currUser.password;
  const auth = useSelector((state) => state.auth.id);
  const loggedInUser = useSelector((state) => state.users.find((user) => user.id === auth)) || {};

  return (
    <div className="formik-user">
      <div className="formik-left">
        <div>
          <h1>Welcome, {currUser.username}</h1>
        </div>
        <img src={currUser.img} />
      </div>
      <div className="formik-right">
        {' '}
        <Formik
          initialValues={{
            id: currUser.id || 1,
            username: currUser.username || '',
            email: currUser.email || '',
            phone: '',
            img: currUser.img || 'https://i.pravatar.cc/300',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          validate={(values) => {
            const errors = {};
            values.password !== values.confirmPassword
              ? (errors.confirmPassword = 'Passwords do not match')
              : '';
            return errors;
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true); // before async call
            if (data.password === '') {
              dispatch(updateUser({ ...data, password: currPassword }));
            } else {
              dispatch(updateUser(data));
            }
            setSubmitting(false); //after async call
          }}
        >
          {({ isSubmitting }) => (
            <Form className="edit-user">
              <div>
                <h1>EDIT PROFILE</h1>
              </div>
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <MyTextField label="Username" name="username" type="input" />
                </Grid>
                <Grid item>
                  <MyTextField label="Email" name="email" type="input" />
                </Grid>
                <Grid item>
                  <MyTextField label="Phone" name="phone" type="input" />
                </Grid>
                <Grid item>
                  <MyTextField label="Photo URL" name="img" type="input" />
                </Grid>
                <Grid item>
                  <MyTextField
                    label="New Password"
                    name="password"
                    type="password"
                  />
                </Grid>
                <Grid item>
                  <MyTextField
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                  />
                </Grid>

                <Grid item className="edit-user-btns">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    sx={{ color: 'black' }}
                  >
                    SUBMIT
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      loggedInUser.isAdmin === true
                        ? history.push('/admin')
                        : history.push('/products')
                    }
                    sx={{ color: 'black' }}
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
  );
};

export default EditUser;
