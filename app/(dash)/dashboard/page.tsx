import Link from 'next/link'
import React from 'react'

function dashboard() {
  return (
    <div className="flex flex-col items-center content-center my-5">
    <Link  className='text-white font-extrabold m-24' href='https://gemini.vercel.ai/'>ChatBot Link</Link>
      </div>
  )
}

export default dashboard