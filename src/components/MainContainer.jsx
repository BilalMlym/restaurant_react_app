import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import RowContainer from './RowContainer'

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
     <HomeContainer/>
     <section className="w-full my-6">
        <div className=" w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all  ease-in-out duration-100">Our Fresh & Healthy Fruits</p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{scale: 0.3}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 hover:shadow-2xl ease-in-out flex items-center justify-center" ><MdChevronLeft className="text-2xl text-black-700" /></motion.div>
            <motion.div whileTap={{scale: 0.3}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 hover:shadow-2xl ease-in-out flex items-center justify-center" ><MdChevronRight className="text-2xl text-black-700" /></motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
     </section>
    </div>
  )
}

export default MainContainer