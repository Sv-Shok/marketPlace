import React from 'react';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';

const UserInfo = () => {
  const store = useStore();
  return store &&
    store.viewer &&
    store.viewer.user &&
    store.viewer.user.fullName ? (
    <div>{store.viewer.user.fullName}</div>
  ) : (
    <div>Anonim</div>
  );
};

export default observer(UserInfo);
