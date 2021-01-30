import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function TextField(props) {
  return (
    <div className={props.className ? props.className: 'col-sm-6 mb-3'}>
      <Field as="textarea" className="form-control" type={props.type ? props.type : 'text'} name={props.name} placeholder={props.placeholder} />
      <ErrorMessage style={{ textAlign: 'left', fontSize: '0.75rem', marginLeft: '1rem', color: 'red'  }} name={props.name} component="div" />
    </div>
  );
}
