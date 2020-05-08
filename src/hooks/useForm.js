import { useState } from 'react';

const useForm = (Form, props) => {
  const [formRef, setFormRef] = useState({ props: {} });
  return [
    <Form
      {...props}
      wrappedComponentRef={form => {
        setFormRef(form || {});
      }}
    ></Form>,
    formRef.props,
  ];
};

export default useForm;
