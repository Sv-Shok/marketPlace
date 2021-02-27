import { ProductModel } from './ProductModel';
import { asyncModel, createCollection } from '../utils';
import * as Api from '../../api/Api';
import { useStore } from '../createStore';

import { Product } from '../schemas';

export function useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
  addProduct: asyncModel(addProduct),
});

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    try {
      const res = await Api.Products.getById(id);

      flow.merge(res.data, Product);
    } catch (err) {
      console.log(err);
    }
  };
}

function addProduct({ title, description, photos, location, price }) {
  return async (flow, store) => {
    try {
      const res = await Api.Products.add({
        title,
        description,
        photos,
        location,
        price,
      });
      store.add(res.data.id, res.data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
