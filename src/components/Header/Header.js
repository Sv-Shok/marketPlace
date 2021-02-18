import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import s from './Header.module.css';
import { routes } from '../../scenes/routes';
import { Icon } from '../Icons/Icon';
import UserInfo from './components/UserInfo/UserInfo';

const Header = () => {
  const history = useHistory();
  const navigateToLogin = () => {
    history.push(routes.login);
  };
  const match = useRouteMatch(routes.auth);
  return (
    <header>
      {match ? (
        <div
          className={s.container}
          style={{ background: '#ffffff' }}
        >
          <div className={s.headerInner}>
            <div className={s.logo}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to={routes.home}>
                <Icon name="logo" color="#262525" />
              </Link>
            </div>
            <div className={s.panelRight}>
              <UserInfo />
              <button onClick={navigateToLogin}>Login</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.container}>
          <div className={s.headerInner}>
            <div className={s.logo}>
              <Icon name="logo" color="white" />
            </div>
            <div className={s.panelRight}>
              <UserInfo />
              <button onClick={navigateToLogin}>Login</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default observer(Header);
