import React from 'react';
import T from 'prop-types';
import s from './Container.module.css';

const Container = ({ width, children }) => {
  return (
    <div className={s.container} style={{ width }}>
      {children}
    </div>
  );
};

Container.propTypes = {
  width: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]),
};

Container.defaultProps = {
  width: '425px',
};

export default Container;
