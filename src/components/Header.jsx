import React, { useState } from 'react';
import Logo from '../img/logo.png'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';


import Avatar from '../img/avatar.png'
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

  const [IsMenu, setIsMenu] = useState(false);
  

  const login = async () => {
    if (!user) {
      const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
      type : actionType.SET_USER,
      user : providerData[0]
    })
    localStorage.setItem("user" , JSON.stringify(providerData[0]));

  }else {
    setIsMenu(!IsMenu);
  }
    }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }
  return (
<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary opacity-95">
  {/* destop and tablet */}
  <div className={`${desktop} w-full h-full items-center justify-between`}>
    <Link to={"/"} className='flex items-center gap-2'>
      <img src={Logo} className="w-8 object-cover" alt="logo"/>
      <p className="text-headingColor text-xl font-bold">ChickHot</p>
    </Link>
      <motion.ul 
      initial={{opacity: 0, x:200}}
      animate={{opacity: 1, x:0}}
      exit={{opacity: 0, x:200}}
      className="flex items-center gap-0.5 ml-auto">
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Home</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Menu</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">About Us</motion.li>
        <motion.li whileTap={{scale: 0.6}} className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Services</motion.li>
     
    </motion.ul>
              <div className="relative flex items-center justify-center">
              <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  2
                </p>
                </div>
              </div>
              <div className="relative">
                <motion.img 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 15 }}
                src={user ? user.photoURL : Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-3 cursor-pointer rounded-full" alt="userProfile"
                onClick={login}
                />
                {
                  IsMenu && (
                    <motion.div 
                    initial={{ opacity:0, scale: 0.6 }}
                    animate={{ opacity:1, scale: 1 }}
                    exit={{ opacity:0, scale: 0.6 }}
                     className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {user && user.email === "bilalmlym@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className="flex  items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-lg transition-all duration-100 ease-in-out text text-textColor text-base p-3" onClick={() => setIsMenu(false)}>New Item  <MdAdd/></p>
                  </Link> )}
                  <p className=" flex  items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-lg transition-all duration-100 ease-in-out text text-textColor text-base p-3"onClick={logout}>Logout  <MdLogout/></p>
                </motion.div>
                  )
                }
              </div>
            
          </div>  
  



  {/* mobile */}
  <div className={`${mobile} flex items-center justify-between w-full h-full`}>
  <Link to={"/"} className='flex items-center gap-2'>
      <img src={Logo} className="w-8 object-cover" alt="logo"/>
      <p className="text-headingColor text-xl font-bold">ChickHot</p>
    </Link>
    <div className="relative flex items-center justify-center">
            <MdShoppingBasket  className= " text-textColor text-2xl cursor-pointer" />
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  2
                </p>
              </div>
            
    </div>
    <div className="relative">
                <motion.img 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 15 }}
                src={user ? user.photoURL : Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-3 cursor-pointer rounded-full" alt="userProfile"
                onClick={login}
                />
                {
                  IsMenu && (
                    <motion.div 
                    initial={{ opacity:0, scale: 0.6 }}
                    animate={{ opacity:1, scale: 1 }}
                    exit={{ opacity:0, scale: 0.6 }}
                     className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {user && user.email === "bilalmlym@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>New Item  <MdAdd/></p>
                  </Link> )}
                  <ul className="flex  flex-col">
                    <li  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() => setIsMenu(false)}>Home</li>
                    <li  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() => setIsMenu(false)}>Menu</li>
                    <li  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() => setIsMenu(false)}>About Us</li>
                    <li  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() => setIsMenu(false)}>Services</li>
     
                  </ul>
                  <p className=" m-2 p-2 rounded-md shadow-lg flex items-center justify-center bg-black-200 gap-2 cursor-pointer hover:bg-slate-200 rounded-md shadow-md transition-all duration-100 ease-in-out text text-redColor text-base p-3"
                  onClick={logout}
                  >Logout<MdLogout/></p>
                </motion.div>
                  )
                }
              </div>
  </div>
</header>
  )
};

export default Header;
