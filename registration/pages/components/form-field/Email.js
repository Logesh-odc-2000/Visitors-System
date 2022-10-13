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
export default function Email() {
  return (
    <div>
              <MyTextField name="email" type="text" label="Email" autoComplete='off'
               className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 sm:text-sm"/>
              </div>
  )
}
