import React from 'react';
import T from 'prop-types';
import s from './Title.module.css';

const Title = ({ size, children }) => {
  return (
    <div className={s.title} style={{ fontSize: size }}>
      {children}
    </div>
  );
};

Title.propTypes = {
  size: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]),
};

Title.defaultProps = {
  size: '18px',
};

export default Title;
