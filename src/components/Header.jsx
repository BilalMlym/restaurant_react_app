import React from 'react';
import Logo from './img/logo.png'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';


import Avatar from './img/avatar.png'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';


const Header = () => {
  const desktop = "hidden md:flex";
  const mobile = "flex md:hidden"; 
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();
  

  const login = async () => {
    if (!user) {
      const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
      type : actionType.SET_USER,
      user : providerData[0]
    })
    localStorage.setItem("user" , JSON.stringify(providerData[0]));

  }
    }
  return (
<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
  {/* destop and tablet */}
  <div className={`${desktop} w-full h-full items-center justify-between`}>
    <Link to={"/"} className='flex items-center gap-2'>
      <img src={Logo} className="w-8 object-cover" alt="logo"/>
      <p className="text-headingColor text-xl font-bold">ChickHot</p>
    </Link>
      <ul className="flex items-center gap-8 ml-auto">
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services</motion.li>
     
    </ul>
          <div
            className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            
              <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  2
                </p>
              </div>
              <div className="relative">
                <motion.img 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 15 }}
                src={user ? user.photoURL : Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-3 cursor-pointer rounded-full" alt="userProfile"
                onClick={login}
                />
                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                  <p className="flex  items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-lg transition-all duration-100 ease-in-out text text-textColor text-base p-3">New Item  <MdAdd/></p>
                  <p className=" flex  items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-lg transition-all duration-100 ease-in-out text text-textColor text-base p-3">Logout  <MdLogout/></p>
                </div>
              </div>
            
          </div>  
  </div>



  {/* mobile */}
  <div className={`${mobile} w-screen h-full`}>aslşdşasl</div>
</header>
  )
};

export default Header;