import React from 'react';
import { Field, ErrorMessage } from 'formik';

const drop = (props) => {
    return <select {...props}>
        <option value="">{props.placeholder}</option>
        {props.options &&
            props.options.map(obj=>
                <option value={obj.value}>
                    {obj.text}
                </option>
            )
        }
    </select>
}

export default function TextField(props) {
  return (
    <div className={props.className ? props.className: 'col-sm-6 mb-3'}>
      <Field className="form-control" as={drop} type='select' name={props.name} placeholder={props.placeholder} 
        options={props.options}
        {...props}
      >
       
      </Field>
      <ErrorMessage style={{ textAlign: 'left', fontSize: '0.75rem', marginLeft: '1rem', color: 'red'  }} name={props.name} component="div" />
    </div>
  );
}
