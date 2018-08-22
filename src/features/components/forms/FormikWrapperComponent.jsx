import React from 'react';
import { Formik } from 'formik';

const FormikWrapperComponent = (props) => {
  const { currentForm, handleSubmit } = props;
  return (
    <Formik
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      component={currentForm.component}
      validationSchema={currentForm.schema}
    />
  );
};

export default FormikWrapperComponent;
