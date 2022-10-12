import React from 'react'
import {useField} from 'formik'


const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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
export default function Mobile() {
  return (
    <div>
              <MyTextField name="mobile" type="tel" label="Mobile" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 sm:text-sm"/>
              </div>
  )
}
