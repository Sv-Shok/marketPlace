import React from 'react';
import { observer } from 'mobx-react';
import FormContainer from '../../components/Form/Container/Container';
import FormTitle from '../../components/Form/Title/Title';
import AddProductForm from './components/AddProductForm/AddProdutForm';
import s from './ProductAdd.module.css';

const ProductAdd = () => {
  const onSubmit = async () => {
    console.log('addProduct');
  };
  return (
    <div className={s.sceneProductAdd}>
      <FormContainer width="1135px">
        <FormTitle size="22px">Add Product</FormTitle>
        <AddProductForm onSubmit={onSubmit} />
      </FormContainer>
    </div>
  );
};

export default observer(ProductAdd);
