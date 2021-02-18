import React from 'react';
import T from 'prop-types';
import s from './Error.module.css';

const Error = ({ children }) => {
  return <div className={s.error}>{children}</div>;
};

Error.propTypes = {
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]),
};

export default Error;
