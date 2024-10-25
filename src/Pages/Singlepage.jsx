import React, { useContext } from 'react'
import { Toggler } from '../App'
import SingleCountry from '../Components/SingleCountry';
import Head from '../Components/Head';

export default function SinglePage() {
  const {click,handler} = useContext(Toggler);
  return (
    <>
        <Head click={click} handler={handler} />
        <SingleCountry />
    </>
  )
}