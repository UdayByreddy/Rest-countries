import React, { useContext } from 'react'
import { Toggler } from '../App'
import Head from '../Components/Head';
import Country from '../Layouts/Country';

export default function SinglePage() {
  const {click,submitHandler} = useContext(Toggler);
  return (
    <>
        <Head click={click} submitHandler={submitHandler} />
        <Country />
    </>
  )
}