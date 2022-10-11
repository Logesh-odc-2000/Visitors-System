import Email from "./components/form-field/Email";
import Fullname from "./components/form-field/Fullname";
import Mobile from "./components/form-field/Mobile";
import Address from './components/form-field/Address'

export default function Example() {
    return (
      <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold font-bold tracking-tight text-gray-900">Registration Form</h2>  
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4  shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <Fullname/>
                <Email/>
                <Mobile/>
                <Address/>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  