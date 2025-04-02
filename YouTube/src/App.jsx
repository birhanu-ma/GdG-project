import React, {useState} from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video'





function App(){


const [sidebar, setSidebar] = useState(true);

  return(
    <div>
      <Navbar setSidebar = {setSidebar}/>
      <Routes>
        <Route path='/' element = {<Home sidebar = {sidebar}/>}/>
        <Route path='/Video/:catagoryId/:videoId' element = {<Video/>}/>
      </Routes>
    </div>

  )
}
export default App















