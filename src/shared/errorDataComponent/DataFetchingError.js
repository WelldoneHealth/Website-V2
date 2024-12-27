import React from 'react'

export default function DataFetchingError({ message = "Oops! Something went wrong." }) {
  return (
    <div className='w-full h-screen max-h-[1000px] ' >
    <div className="flex items-center justify-center h-3/5 ">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-red-500">{message}</h1>
        <p className="text-gray-600 mt-2">Please try refreshing the page or check back later.</p>
      </div>
    </div>
    </div>
  )
}
