import React from 'react';
import { useField } from 'formik';
import T from 'prop-types';
import s from './InputText.module.css';
import Error from '../Error/Error';

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label className={s.inputContainer}>
        <span>{label}</span>
        <input {...field} {...props} className={s.formInput} />
      </label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};

InputText.propTypes = {
  label: T.string,
};

export default InputText;
