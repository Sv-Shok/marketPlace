import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import Submit from 'src/components/Form/Button/Button';
import InputText from 'src/components/Form/InputText/InputText';
import InputPassword from 'src/components/Form/InputPassword/InputPassword';
import s from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
    password: Yup.string()
      .label('Password')
      .required('Password is a required field')
      .min(3, 'Password is too short')
      .max(30, 'Password is too longer.'),
  });

  const formikProps = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit,
  };

  const styles = {
    recoverLink: {
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      color: '#8C8C8C',
    },
  };
  return (
    <div className={s.formWrap}>
      <Formik {...formikProps}>
        <Form>
          <div className={s.textWrapper}>
            <InputText
              type="email"
              name="email"
              label="Email"
              placeholder="Example@gmail.com"
              autoComplete="email"
            />
          </div>
          <div className={s.passWrapper}>
            <InputPassword
              name="password"
              label="Password"
              autoComplete="new-password"
            />
            <div className={s.recoverPassword}>
              <Link to={routes.restore} style={styles.recoverLink}>
                Do not remember password ?
              </Link>
            </div>
          </div>

          <Submit>Continue</Submit>
        </Form>
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: T.func,
};

export default LoginForm;
