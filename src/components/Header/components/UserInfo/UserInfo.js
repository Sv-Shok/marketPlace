import React from 'react';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';

const UserInfo = () => {
  const store = useStore();
  console.log(store.viewer.user);
  // return <div>{store.viewer.user.fullName}</div>;
  return <div>user</div>
};

export default observer(UserInfo);
