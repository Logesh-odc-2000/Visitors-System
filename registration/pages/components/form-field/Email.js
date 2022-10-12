import React from 'react'

export default function Email() {
  return (
    <div>
    <label htmlFor="email" className="block text-sm font-medium font-bold ">
      Email 
    </label>
    <div className="mt-1">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="off"
        required
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 sm:text-sm"
      />
    </div>
  </div>

  )
}
