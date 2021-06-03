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
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className='form-container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ContactSchema}>
        {(isSubmitting) => (
          <Form>
            <Field type='name' name='name' />
            <ErrorMessage name='name' component='div' />

            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />

            <Field type='message' name='message' />
            <ErrorMessage name='message' component='div' />

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
