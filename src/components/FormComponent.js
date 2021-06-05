import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showToast } from '../redux/toastSlice';

function FormComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [networkError, setNetworkError] = useState('');
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const mas = JSON.stringify(values);
    try {
      setNetworkError('');
      await axios.post(process.env.REACT_APP_FIREBASE_URL, mas);
      setSubmitting(false);
      dispatch(showToast(true));
      return history.push('/');
    } catch (error) {
      console.log(error);
      setNetworkError(error.message);
    }
  };

  const CustomInputComponent = (props) => (
    <textarea className='textArea' {...props} placeholder='Enter message'></textarea>
  );

  return (
    <div className='form-container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ContactSchema}>
        {({ isSubmitting }) => (
          <Form className='form'>
            <Field type='input' name='name' placeholder='Enter name' />
            <ErrorMessage className='error' name='name' component='div' />

            <Field type='email' name='email' placeholder='Enter email' />
            <ErrorMessage className='error' name='email' component='div' />

            <Field name='message' as={CustomInputComponent} />
            <ErrorMessage className='error' name='message' component='div' />

            <button type='submit' disabled={isSubmitting}>
              SUBMIT
            </button>
            {networkError && <div className='error'>{networkError}</div>}
            <h2>call me at 7559961738</h2>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
