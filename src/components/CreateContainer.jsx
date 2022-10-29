import { useState } from "react";
import React from 'react'


  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

const CreateContainer = () => {


  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-grey-500 rounded-lg p-4 flex flex-col items-center justify-center">
        { fields && (
          <p className={"w-full p-2 rounded-lg text-center ${
            alertStatus === "danger"
            ? "bg-red-500 text-red-500"
            : "bg-green-500 text-green-400"
          }"}
          >
            Something wrong
          </p>
        )
        }
      </div>
    </div>
  )
}

export default CreateContainer