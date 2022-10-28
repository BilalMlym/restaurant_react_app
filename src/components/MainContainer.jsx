import React from 'react'
import Delivery from './img/delivery.png'

const MainContainer = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 shadow-2xl">
      <div className="p-4 flex flex-col items-start  md:items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-2 bg-orange-200 rounded-full px-3 py-2">
        <p className="text-base text-orange-500 font-semibold">Fastest Delivery in Town</p>
        <div className="w-9 h-9 bg-slate-50 overflow-hidden rounded-full drop-shadow-xl">
        <img src={Delivery} alt="bike-delivery" className="w-full h-full object-contain"/>
        </div>
        
      </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor md:text-[4.5rem]">Fastest Delivery in <span className="text-[3rem] md:text-[5rem] text-orange-500">Your City</span></p>
        <p className="text-base text-textColor text-center md:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate non ratione repudiandae, voluptatibus ipsam nihil ea incidunt ex! Libero hic at ipsum autem? Error fugit minima recusandae odio sed!</p>
        <button type='button' className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-[%80] p-4 rounded-lg hover:shadow-lg ">Order Now</button>
        </div>
        
      <div className="p-4 bg-pink-50 flex flex-col items-start md:items-center justify-center">
        <p className="text-base text-orange-500 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo assumenda praesentium explicabo, reiciendis quas tenetur maiores, debitis est vel corporis odio ducimus. Quis eaque maxime cum reiciendis exercitationem harum.</p>
      </div>
    </div>
  )
}

export default MainContainer