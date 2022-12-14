import Email from "./components/form-field/Email";
import Fullname from "./components/form-field/Fullname";
import Mobile from "./components/form-field/Mobile";
import Address from './components/form-field/Address'
import { Formik, Form } from 'formik'
import {validschema} from './Validation'


export default function Example() {

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-bold font-bold tracking-tight text-gray-900">Visitor Registration </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" bg-gray-200 py-12 px-4  shadow sm:rounded-lg sm:px-10">
            <Formik
              className="space-y-6"
              initialValues={{
                fullname: '',
                mobile: '',
                email: '',
                address:''
              }}
              validationSchema={validschema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({ Values }) => (
                
                <Form>
                  <Fullname /><br />
                  <Mobile /><br />
                  <Email /><br />
                  <Address />
                  <br />
                  <div className="py-10">
                    <button className="flex w-full justify-center rounded-md border  bg-black py-2 px-4 text-sm font-medium text-white " type="submit">Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
