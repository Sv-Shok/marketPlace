import React, { useState } from 'react';
import { useField } from 'formik';
import T from 'prop-types';
import s from './InputPassword.module.css';
import { Icon } from '../../Icons/Icon';
import Error from '../Error/Error';

const InputPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const [isInputType, setTnputType] = useState(true);

  const passwordTypeSwitch = () => {
    setTnputType(!isInputType);
  };

  return (
    <>
      <label className={s.inputContainer}>
        <span>{label}</span>
        <div className={s.fieldWrapper}>
          <input
            type={isInputType ? 'password' : 'text'}
            {...field}
            {...props}
            className={s.fieldInput}
            onClick={passwordTypeSwitch}
          />
          <span className={s.showPassword}>
            <Icon name="shape" />
          </span>
        </div>
      </label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};

InputPassword.propTypes = {
  label: T.string,
};

export default InputPassword;
