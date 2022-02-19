import React from 'react';
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
      style={{ width: 320 }}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
    />
  );
};

const validationSchema = yup.object({
  username: yup.string().required('username is required').min(3).max(20),
  password: yup.string(),
  email: yup.string().required('email is required').max(25),
  img: yup.string().max(25),
});

const EditUser = () => {
  const { id } = useParams();
  const currUser = useSelector(
    (state) => state.users.find((user) => user.id === id) || {}
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const currPassword = currUser.password;

  return (
    <div className="formik">
      <Formik
        initialValues={{
          id: currUser.id || 1,
          username: currUser.username || '',
          email: currUser.email || '',
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
          <Form>
            <div>
              <h4>Edit User Info</h4>
            </div>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <MyTextField label="Username" name="username" type="input" />
              </Grid>
              <Grid item>
                <MyTextField label="Email" name="email" type="input" />
              </Grid>
              <Grid item>
                <MyTextField label="Photo" name="img" type="input" />
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

              <Grid item>
                <Button disabled={isSubmitting} type="submit" color="primary">
                  SUBMIT
                </Button>
                <Button
                  type="button"
                  onClick={() => history.push('/products')}
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
  );
};

export default EditUser;
