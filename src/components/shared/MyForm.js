import React from 'react';
import { Formik, Form } from 'formik';

const MyForm = (props) => {
  const { children } = props;
  return (
    <>

      <Formik
        enableReinitialize
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}

        onSubmit={async (values, { setSubmitting }) => {
          props.submitHandler(values).then(data => {
          }).catch(err => {
          }).finally(() => {
            setSubmitting(false);
            setTimeout(async () => {
              if (props.onHide)
                props.onHide();
            }, 2000);
          })
        }}
      >
        {({ isSubmitting, values, errors }) => (
          <Form noValidate className="text-center">
            <div className="row container mr-0">
              {typeof (children) === 'object' &&
                children
              }
              {typeof (children) === 'function' &&
                children(values, errors)
              }
            </div>
            <div className="row container mr-0  mt-3 ">
              <div className="col-sm-4 "></div>
              <div className="col-sm-4 ">
                <input type="submit" className="btn btn-info btn-block" disabled={isSubmitting}
                  value='Save'
                />
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default MyForm;