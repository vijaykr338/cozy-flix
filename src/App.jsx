import React from 'react'
import StarterPage from './components/StarterPage'
import MainPage from './components/MainPage'
import AnimatedCursor from 'react-animated-cursor'
import WatchList from './components/WatchList'
import FullPage from './components/FullPage'
import MoreDetail from './components/MoreDetail'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StarterPage/>,
    },
  ]);


  return (
    <div>
      {/* <AnimatedCursor 
        innerSize={10}
        outerSize={20}
        color='255, 255, 255'
      /> */}
      <RouterProvider router={router}/>
      <StarterPage></StarterPage>
      
    </div>
  )
}

export default App
