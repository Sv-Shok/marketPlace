import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import T from 'prop-types';
import s from './RegisterForm.module.css';
import InputPassword from '../../../components/Form/InputPassword/InputPassword';
import Submit from '../../../components/Form/Button/Button';
import InputText from '../../../components/Form/InputText/InputText';

const RegisterForm = ({ onSubmit }) => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
    fullName: Yup.string()
      .min(3, 'full Name is too short')
      .max(30, 'full Name is too long')
      .required('Full Name is a required field'),
    password: Yup.string()
      .label('Password')
      .required('Password is a required field')
      .min(3, 'Password is too short')
      .max(30, 'Password is too longer.'),
    passwordAgain: Yup.string()
      .required('Confirm password is required')
      .label('Confirm password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit,
    validationSchema: RegisterSchema,
  };
  return (
    <div className={s.formWrap}>
      <Formik {...formikProps}>
        <Form>
          <div className={s.inputWrapper}>
            <InputText
              name="email"
              label="Email"
              autoComplete="email"
            />
          </div>
          <div className={s.inputWrapper}>
            <InputText
              name="fullName"
              label="Full name"
              autoComplete="fullName"
            />
          </div>
          <div className={s.inputWrapper}>
            <InputPassword
              name="password"
              label="Password"
              autoComplete="new-password"
            />
          </div>
          <div className={s.inputWrapper}>
            <InputPassword
              name="passwordAgain"
              label="Password Again"
              autoComplete="new-password"
            />
          </div>
          <Submit>Register</Submit>
        </Form>
      </Formik>
    </div>
  );
};

RegisterForm.propTypes = {
  onSubmit: T.func,
};

export default RegisterForm;
