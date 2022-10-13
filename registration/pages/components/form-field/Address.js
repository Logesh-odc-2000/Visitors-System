import React from 'react'
import {useField} from 'formik'


const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
      <>
          <label>
              {label}
              <input {...field} {...props} />
          </label>
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </>
  );
};
export default function Address() {
  return (
    <div>
              <MyTextField name="address" component="textarea" label="Address" row='4' autoComplete='off'
              className="block w-full  appearance-none rounded-md border border-gray-300 px-3 py-10 placeholder-gray-400 sm:text-sm"/>
              </div>
  )
}
