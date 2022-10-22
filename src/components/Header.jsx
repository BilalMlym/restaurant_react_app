import React from 'react';
import Logo from './img/logo.png'

const Header = () => {
  return (
<div className='fixed z-50 w-screen p-6 px-16'>
  {/* destop and tablet */}
  <div className='hidden md:flex w-screen h-full'>
    <div className='flex items-center gap-2'>
      <img src={Logo} alt="logo" />
    </div>
  </div>



  {/* mobile */}
  <div className='flex md:hidden w-screen h-full'>aslşdşasl</div>
</div>
  )
};

export default Header;