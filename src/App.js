import React from 'react'
import { Header, MainContainer, CreateContainer } from './components'
import { Routes , Route} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

const App = () => {
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