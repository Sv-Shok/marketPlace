import React from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import s from './Register.module.css';
import FormContainer from '../../components/Form/Container/Container';
import FormTitle from '../../components/Form/Title/Title';
import { routes } from '../routes';
import RegisterForm from './components/RegisterForm';
import { useStore } from '../../stores/createStore';

const Register = () => {
  const history = useHistory();

  const store = useStore();

  const onSubmit = async ({ email, password, fullName }) => {
    await store.auth.register.run({ email, password, fullName });

    store.auth.setIsLoggedIn(true);
    history.push(routes.home);
  };

  const styles = {
    linkLogIn: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: '#349A89',
    },
  };
  return (
    <div className={s.sceneRegister}>
      <FormContainer>
        <FormTitle size="22px">Register</FormTitle>
        <RegisterForm onSubmit={onSubmit} />
      </FormContainer>
      <FormContainer>
        <div className={s.logIn}>
          I already have an account,
          <Link to={routes.login} style={styles.linkLogIn}>
            {' Log in'}
          </Link>
        </div>
      </FormContainer>
    </div>
  );
};

export default observer(Register);
