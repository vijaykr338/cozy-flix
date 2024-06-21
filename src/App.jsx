import React from 'react'
import StarterPage from './components/StarterPage'
import MainPage from './components/MainPage'
import AnimatedCursor from 'react-animated-cursor'
import WatchList from './components/WatchList'
import FullPage from './components/FullPage'
import MoreDetail from './components/MoreDetail'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { WatchListProvider } from './components/context/WatchListContext'
import { AuthProvider } from './components/context/authContext'
import SignIn from './components/SignIn'

function App(){
  return (

    <WatchListProvider>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StarterPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/main" element={<MainPage/>} />
          <Route path="/more-detail/:id" element={<MoreDetail/>} />
          <Route path="/watchlist" element={<WatchList/>} />
        </Routes>
      </Router>
      </AuthProvider>
    </WatchListProvider>
  );
}

{/* <AnimatedCursor 
        innerSize={10}
        outerSize={20}
        color='255, 255, 255'
      /> */}

export default App