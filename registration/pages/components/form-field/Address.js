import React from 'react'

export default function Address() {
  return (
    <div>
                <label htmlFor="password" className="block text-sm font-bold font-medium">
                  Address
                </label>
                <div className="mt-1">
                  <textarea
                    autoComplete="off"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 sm:text-sm"
                  />
                </div>
              </div>
  )
}
