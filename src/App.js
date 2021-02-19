import React, { useEffect, useState } from 'react';
import { createStore, Provider } from 'src/stores/createStore';
import s from './App.module.css';
import Router from './scenes/routes';

const App = () => {
  const store = createStore();
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    store.bootstrap().then(() => {
      // setLoading(false);
    });
  }, []);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className={s.app}>
      <Provider value={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
