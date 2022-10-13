import * as Yup from "yup";


export const validschema = Yup.object().shape({
    fullname: Yup.string().required('* Name is Required'),
    email: Yup.string().email().required('* Mail is Required'),
    mobile: Yup.string()
    .required("* Mobile is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
    address: Yup.string().required('* Address is required'),
  });
  