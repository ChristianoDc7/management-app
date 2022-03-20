import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import './App.css';
import { Routes , Route, useNavigate} from 'react-router-dom';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';
import Users from './component/users/users';
import OgtTable from './component/ogt/ogt-table';
import Navs from './component/navbar/navbar';
import Login from './component/login/login';
import { NotFound } from './component/not found/NotFound';
import { AuthContext } from './services/Auth/Auth-Provider';
import AuthProvider from './services/Auth/Auth-Provider';
import ProtectedRoute from './services/Auth/protectedRoute';




function App() {
  const {isAuthenticated, setIsAuthenticated , user , setUser , Logout} = useContext(AuthContext)
  return (
        <div className="App">
            <Navs/>
            {
              isAuthenticated ? (<button onClick={Logout}>Logout</button>) 
              : ('')
            }
            <div className='routes'>
                <Routes>
                  <Route path='/' element={<Home isAuth={isAuthenticated}/>} />
                  //Route Protégé
                  <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
                      <Route path='count' element={<Count/>} />
                      <Route path='ogt' element={<OgtTable/>} />
                      <Route path='users' element={<Users />} />
                  </Route>
                  <Route path='about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='login' element={<Login />}></Route>
                </Routes>
            </div>
        </div>
  );
}

export default App;



