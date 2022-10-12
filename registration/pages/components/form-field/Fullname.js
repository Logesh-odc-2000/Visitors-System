import React from 'react'

export default function Fullname() {
  return (
    <div>
                <label htmlFor="password" className="block text-sm font-medium font-bold ">
                  Fullname
                </label>
                <div className="mt-1">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="off"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 sm:text-sm"
                  />
                </div>
              </div>
  )
}
