import React from 'react'

const  RowContainer = ({flag}) => {
  return (
    <div className={`w-full flex items-center gap-3 my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}>
        <div className="w-300 md:w-225 my-12 h-auto  backdrop-blur-lg">
            <div className="flex items-center justify-between ">
                <img src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-34a27.appspot.com/o/Images%2F1667486743470-2.jpg?alt=media&token=eb112d2c-31de-4681-9949-ae9e9d94af56" alt=""  className=" w-40 -mt-8"/>
                <div className="w-8 h-8 rounded-full bg-slate-700" ></div>
            </div>
            
        </div>
      </div>
  )
}
export default  RowContainer