import React, { useContext } from 'react'
import Head from '../Components/Head'
import { Link } from 'react-router-dom'
import { Toggler } from '../App'
export default function ErrorPage() {
  const {click,submitHandler} = useContext(Toggler);
  return (
    <>
    <Head click={click} submitHandler={submitHandler}/>
    <div className='w-full flex flex-col justify-center items-center'>
    <Link to={'/'} className='py-4'>
        <button className=' p-4 bg-white-600 text-black rounded-sm font-semibold shadow-xl'>Go To Home</button>
        </Link>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" className='w-[50%] h-[300px] object-contain'/>

    </div>
    </>
  )
}
