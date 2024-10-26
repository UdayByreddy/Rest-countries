import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'


const Head = ({click,submitHandler}) => {

  return (
    <>
      <header className={`w-full flex justify-between p-4 ${click?'dark-theme-head':'shadow-xl'}  lg:p-6`}>
        <span className="text-sm font-bold lg:text-xl">Where in the World</span>
        <button onClick={submitHandler} className="border-none px-4 lg:px-8 lg:text-xl">
          <FontAwesomeIcon icon={click ? faSun : faMoon} className="mr-3" />
          {click ? 'Light' : 'Dark'}
        </button>
      </header>
    </>
  );
};

export default Head;