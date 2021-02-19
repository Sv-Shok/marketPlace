import React from 'react';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';

const UserInfo = () => {
  const store = useStore();
  return <div>{store.viewer.user.fullName}</div>;
};

export default observer(UserInfo);
