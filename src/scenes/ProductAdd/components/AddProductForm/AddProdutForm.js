import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import T from 'prop-types';
import Submit from 'src/components/Form/Button/Button';
import InputText from 'src/components/Form/InputText/InputText';
import TextArea from 'src/components/Form/TextArea/TextArea';
import s from './AddProductForm.module.css';

const AddProductForm = ({ onSubmit }) => {
  const AddProductSchema = Yup.object().shape({
    title: Yup.string()
      .label('Invalid title')
      .required('Title is a required field'),
    location: Yup.string()
      .label('location')
      .required('Location is a required field')
      .min(3, 'Location is too short')
      .max(30, 'Location is too longer.'),
    description: Yup.string()
      .label('description')
      .required('Description is a required field')
      .min(3, 'Description is too short')
      .max(300, 'Description is too longer.'),
    price: Yup.string()
      .label('Invalid title')
      .required('Title is a required field')
      .min(3, 'Price is too short')
      .max(30, 'Price is too longer.'),
  });

  const formikProps = {
    initialValues: {
      title: '',
      location: '',
      description: '',
    },
    validationSchema: AddProductSchema,
    onSubmit,
  };

  const styles = {
    recoverLink: {
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      color: '#8C8C8C',
    },
  };
  return (
    <div className={s.formWrap}>
      <Formik {...formikProps}>
        <Form>
          <div className={s.textWrapper}>
            <InputText
              type="text"
              name="title"
              label="TITLE"
              placeholder="For example: Iron man suit"
              autoComplete="title"
            />
          </div>
          <div className={s.textWrapper}>
            <InputText
              type="text"
              name="location"
              label="LOCATION"
              autoComplete="location"
            />
          </div>
          <div className={s.textWrapper}>
            <TextArea
              type="textarea"
              name="description"
              label="DESCRIPTION"
              autoComplete="description"
              placeholder="For example: Iron man suit"
              rows={10}
            />
          </div>
          <div className={s.textWrapper}>
            <InputText
              type="number"
              name="price"
              label="PRICE"
              autoComplete="price"
            />
          </div>
          <div className={s.btnWrap}><Submit>Submit</Submit></div>
        </Form>
      </Formik>
    </div>
  );
};

AddProductForm.propTypes = {
  onSubmit: T.func,
};

export default AddProductForm;
