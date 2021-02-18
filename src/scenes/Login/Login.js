import React from 'react';
import { useHistory } from 'react-router';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import s from './Login.module.css';
import LoginForm from './components/LoginForm';
import FormContainer from '../../components/Form/Container/Container';
import FormTitle from '../../components/Form/Title/Title';

const Login = () => {
  const history = useHistory();
  const store = useStore();

  const onSubmit = async ({ email, password }) => {
    await store.auth.login.run({ email, password });

    history.push(routes.home);
  };

  const styles = {
    regNow: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: '#349A89',
    },
  };
  return (
    <div className={s.sceneLogin}>
      {store.auth.login.isLoading ? (
        <FormContainer>Loading...</FormContainer>
      ) : (
        <>
          <FormContainer>
            <FormTitle size="22px">Login</FormTitle>
            <LoginForm onSubmit={onSubmit} />
          </FormContainer>
          <FormContainer>
            <div className={s.registerNow}>
              I have no account,
              <Link to={routes.register} style={styles.regNow}>
                {' Register now'}
              </Link>
            </div>
          </FormContainer>
        </>
      )}
    </div>
  );
};

export default observer(Login);
