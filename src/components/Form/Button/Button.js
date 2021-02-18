import React from 'react';
import T from 'prop-types';
import s from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: T.string,
};

export default Button;
