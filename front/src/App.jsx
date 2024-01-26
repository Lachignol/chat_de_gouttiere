import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCreateCourse from "./admin-pages/Create-course";
import AllCourseAdmin from "./admin-pages/All-courses";
import ModifyCourse from "./admin-pages/Update-course";
import AddCheckpoint from "./admin-pages/Add-checkpoint";
import AddTimeUser from "./admin-pages/Add-time-user";
import Subscription from "./subscription-pages/Subscription-page";
import Authentification from "./authentification/authentification";
import ProchaineCourse from "./prochaine-courses-pages/Prochaine-course";
import DerniereCourse from "./derniere-course-pages/Derniere-course";
import MapLocation from "./components/Map-location/Map-location";
import Map from "../src/components/Map/Map";
import RootPage from "./root-page/Root-page";

import Login from "./login-pages/Login";
import { useState } from 'react'
import './App.css'
import HomePage from "./home-pages/Home-page";
import Classement from "./classement-pages/Classement";


function App() {

  return (
    
    <>
    <BrowserRouter>
        <Routes>
        {/* <Route path="/home-page" element={<Authentification> <HomePage /> </Authentification>}/> */}
        <Route path="/" element={<RootPage />}/>
        <Route path="/home-page" element={<HomePage />}/>
          <Route path="/admin/all-courses" element={<AllCourseAdmin />} />
          <Route path="/create-course" element={<FormCreateCourse />} />
          <Route path="/update-course/:id" element={<ModifyCourse />}/>
          <Route path="/add-checkpoint/:id" element={<AddCheckpoint />}/>
          <Route path="/add-time-user/:id" element={<AddTimeUser/>}/>
          <Route path="/login-page/" element={<Login/>}/>
          <Route path="/subscription-page/" element={<Subscription/>}/>
          <Route path="/prochaine-course/" element={<ProchaineCourse/>}/>
          <Route path="/derniere-course/" element={<DerniereCourse/>}/>
          <Route path="/classement/" element={<Classement/>}/>
          <Route path="/map/" element={<Map/>}/>
          <Route path="/map-location" element={<MapLocation/>}/>
           {/* ""          <Route path="/PageConnexion" element={<UserConnexion />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<PagePrincipal />} />
          <Route path="/Admin" element={<Auth><AdminPage /> </Auth>} /> */}

          {/* <Route  path="/Chaise" element={<ShopCategory category="chaise" /> } />
      <Route  path="/Table" element={<ShopCategory category="Table" /> } />
      <Route  path="/Lampe" element={<ShopCategory category="Lampe" /> } />
      <Route  path="/Sofa" element={<ShopCategory category="Sofa" /> } />
      <Route  path="/Fauteuil" element={<ShopCategory category="Fauteuil" /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
