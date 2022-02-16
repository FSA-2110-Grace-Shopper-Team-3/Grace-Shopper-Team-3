import React from 'react';
import { updateUser } from '../store/users';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Formik, Form, useField } from 'formik';
import { TextField, Button } from '@material-ui/core';
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
    />
  );
};

const validationSchema = yup.object({
  username: yup.string().required('username is required').max(20),
  password: yup.string().required('password is required'),
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

  console.log('USER', currUser);

  return (
    <div className="formik">
      <Formik
        initialValues={{
          id: currUser.id || 1,
          username: currUser.username || '',
          password: currUser.password || '',
          email: currUser.email || '',
          img: currUser.img || 'https://i.pravatar.cc/300',
        }}
        validationSchema={validationSchema}
        validate={(values) => {
          const errors = {};

          values.username === currUser.username
            ? (errors.username = `Your current username is ${currUser.username}`)
            : '';

          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true); // before async call
          dispatch(updateUser(data));
          setSubmitting(false); //after async call
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <h4>Edit User Info</h4>
            </div>
            <div>
              <MyTextField
                placeholder="username"
                name="username"
                type="input"
              />
            </div>
            <div>
              <MyTextField
                placeholder="password"
                name="password"
                type="input"
              />
            </div>
            <div>
              <MyTextField placeholder="email" name="email" type="input" />
            </div>
            <div>
              <MyTextField placeholder="photo url" name="img" type="input" />
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                SUBMIT
              </Button>
              <Button
                type="button"
                onClick={() => history.push('/admin/users')}
              >
                CANCEL
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUser;
