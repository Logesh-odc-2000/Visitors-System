import React from 'react'

export default function Mobile() {
  return (
    <div>
                <label htmlFor="password" className="block text-sm font-medium font-bold ">
                  Mobile
                </label>
                <div className="mt-1">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="off"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 bg-white py-2 placeholder-gray-400 sm:text-sm"
                  />
                </div>
              </div>
  )
}
