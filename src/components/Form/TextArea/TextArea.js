import React from 'react';
import { useField } from 'formik';
import T from 'prop-types';
import s from './TextArea.module.css';
import Error from '../Error/Error';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label className={s.textAreaContainer}>
        <span>{label}</span>
        <textarea {...field} {...props} className={s.formTextArea} />
      </label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};

TextArea.propTypes = {
  label: T.string,
};

export default TextArea;
