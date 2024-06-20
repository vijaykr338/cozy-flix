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
import { WatchListProvider } from './components/context/WatchListContext'

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/more-detail/:id",
      element: <MoreDetail/>
    },
    {
      path: "/watchlist",
      element: <WatchList/>
    }
    
  ]);


  return (
    <WatchListProvider>
      
      <RouterProvider router={router}/>
    
      
    </WatchListProvider>
  )
}

{/* <AnimatedCursor 
        innerSize={10}
        outerSize={20}
        color='255, 255, 255'
      /> */}

export default App
