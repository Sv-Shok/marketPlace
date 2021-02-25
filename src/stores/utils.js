import { applySnapshot, getParent, getRoot, onSnapshot, types } from 'mobx-state-tree';

export function asyncModel(thunk, auto = true) {
  const model = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
    })
    .actions((store) => ({
      start() {
        store.isLoading = true;
        store.isError = false;
      },
      success() {
        store.isLoading = false;
      },
      error() {
        store.isLoading = false;
        store.isError = true;
      },
      run(...args) {
        const promise = thunk(...args)(
          store,
          getParent(store),
          getRoot(store),
        );
        if (auto) {
          store._auto(promise);
        }
        return promise;
      },

      async _auto(promise) {
        try {
          store.start();
          await promise;

          store.success();
        } catch (err) {
          store.error(err);
        }
      },
    }));
  return types.optional(model, {});
}

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    localStorage.setItem(
      '__persist',
      JSON.stringify({
        auth: {
          isLoggedIn: snapshot.auth.isLoggedIn,
        },
        viewer: {
          user: snapshot?.viewer?.user,
        },
      }),
    );
  });
  function rehydrate() {
    const snapshot = localStorage.getItem('__persist');

    if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }

  return {
    rehydrate,
  };
}

export function createCollection(ofModel, asyncModels ={}) {
  const collection = types
    .model('CollectionModel', {
      collection: types.map(ofModel),
      ...asyncModels,
    })
    .views((store) => ({
      get(key) {
        return store.collection.get(String(key));
      },
    }))
    .actions((store) => ({
      add(key, value) {
        store.collection.set(String(key), value);
      },
    }));
  return types.optional(collection, {});
}
