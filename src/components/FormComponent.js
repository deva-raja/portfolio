import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function FormComponent() {
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

  const onSubmit = (values, { setSubmitting }) => {
    // setSubmitting(true);
    console.log(values);
    // setSubmitting(false);
  };

  const CustomInputComponent = ({ ...props }) => (
    <textarea
      className='textArea'
      {...props}
      rows='4'
      cols='50'
      placeholder='Enter message'
    ></textarea>
  );

  return (
    <div className='form-container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ContactSchema}>
        {(isSubmitting) => (
          <Form className='form'>
            <Field type='input' name='name' placeholder='Enter name' />
            <ErrorMessage className='error' name='name' component='div' />

            <Field type='email' name='email' placeholder='Enter email' />
            <ErrorMessage className='error' name='email' component='div' />

            {/* <Field type='message' name='message' placeholder='Enter message' /> */}
            <Field name='message' as={CustomInputComponent} />
            <ErrorMessage className='error' name='message' component='div' />

            {/* <button type='submit' disabled={isSubmitting}> */}
            <button type='submit'>SUBMIT</button>
            <h2>call me at 7559961738</h2>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
