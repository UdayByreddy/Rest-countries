import React from 'react'
import Head from '../Components/Head'
import { Link } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <>
    <Head />
    <div className='w-full h-vh flex flex-col justify-center items-center'>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" className='w-full h-50'/>
        <Link to={'/'}>
        <button className=' p-4 bg-white-600 text-black rounded-sm font-semibold shadow-xl'>Go To Home</button>
        </Link>

    </div>
    </>
  )
}
