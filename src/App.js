import React, { Fragment } from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import Error from './Components/Error';
import User from './Components/User';
import DetailUser from './Components/DetailUser';
import Profile from './Components/Profile';
import { AuthProvider } from './Components/Auth';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
const LazyAbout = React.lazy(()=>import('./Components/About'))


function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <NavBar/>
    <Routes>
    <Route  path="/" element={<Home/>}/>
      {/* <Route  path="/" element={<Fragment><NavBar/><Home/></Fragment>}/> */}
      <Route  path="about" element={<React.Suspense fallback="loading.."><LazyAbout/></React.Suspense>}/>
      <Route  path="contact" element={<Contact/>}/>
      <Route path="user" element={<User/>}>
      <Route path=":userId" element={<DetailUser/>}/>
      </Route>
      <Route  path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
      <Route  path="login" element={<Login/>}/>
      <Route  path="*" element={<Error/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>

    </>
  );
}

export default App;
