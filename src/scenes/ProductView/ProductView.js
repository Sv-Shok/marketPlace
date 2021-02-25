import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { useProductsCollection } from '../../stores/Products/ProductsCollection';

const ProductView = () => {
  const { productId } = useParams();
  const collection = useProductsCollection();
  const product = collection.get(productId);
  useEffect(() => {
    if (!product || !product.owner) {
      collection.getProduct.run(productId);
    }
  }, []);

  if (collection.getProduct.isLoading) {
    return <div>Loading...</div>;
  } else if (!product) {
    return <div>Not FOUND</div>;
  }
  return (
    <div>
      <div>
        <h1>{product.title}</h1>
      </div>
      <div>
        <h3>Owner</h3>
        {product.owner && product.owner.fullName}
      </div>
    </div>
  );
};

export default observer(ProductView);
