import React, { useContext } from 'react'
import Head from '../Components/Head';
import TitleSection from '../Layouts/TitleSection';
import { Toggler } from '../App'

export default function MainPage() {
  const {click,submitHandler} = useContext(Toggler);
  return (
    <>
       <Head click={click} submitHandler={submitHandler} />
       <TitleSection click={click} />
    </>
  )
}