import React,{ useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";

const CreateContainer = () => {

  const [title, setTitle] = useState(null);
  const [calories, setCalories] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-grey-500 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
            alertStatus === "danger"
              ? "bg-red-400 text-red-800"
              : "bg-emerald-400 text-emerald-800"
          }`}>
            {msg}
          </motion.p>
          )}
          <div className="w-full py-2 border border-gray-500 flex items-center">
            <MdFastfood className="m-2 text-xl text-gray-700"/>
            <input type="text" required value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Give me a title' className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor" />
          </div>
          <div className="w-full">
            <select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-grey-200 p-2 border-rounded cursor-pointer " >
              <option value="other" className="bg-white">Select Category</option>
              {categories && categories.map((item) => (
                <option key={item.id} className=" text-base border-0 outline-none capitalize text-headingColor bg-white" value={item.urlParamName} >
                  {item.name}
                </option>
              ))}             
            </select>
          </div>
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    
                   
                  </div>
                </>
              )}
            </>
          )}
        </div>      
        </div>
    </div>
  )
}

export default CreateContainer