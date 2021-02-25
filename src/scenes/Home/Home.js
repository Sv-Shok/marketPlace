import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { generatePath } from 'react-router';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/createStore';
import { routes } from '../routes';

const Home = () => {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);
  const loading = store.latestProducts.fetchLatest.isLoading;
  console.log(store.latestProducts);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {store.latestProducts.items.map((item) => (
            <li>
              <NavLink
                to={generatePath(routes.product, {
                  productId: item.id,
                })}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default observer(Home);
