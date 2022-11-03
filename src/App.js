import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/stateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{} , dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col">
      <Header/>
      <main className="mt-16 md:mt-24 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />}></Route>
          <Route path="/createItem" element={<CreateContainer />}></Route>
        </Routes>
        {console.log('here')}
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App


