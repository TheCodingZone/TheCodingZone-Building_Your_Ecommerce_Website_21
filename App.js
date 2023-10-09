import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Componants/Login'
import { Fragment, useContext } from 'react';
import Signup from './Componants/Signup';
import UserProfile from './Componants/UserProfile';
import LoginPage from './Componants/Login';
import Logout from './Componants/Logout';
import AuthContext from './Store/auth-context';
function App() {
  const useCtx=useContext(AuthContext);
  
  return (
    
   <Router>

   <Header/>
   <Routes>
   <Route path='/Login' element={ <Login/>}></Route>
   <Route path='/Signup' element={ <Signup/>}></Route>
   {useCtx.isLoggedIn && 
   <Route path='/Profile' element={ <UserProfile/>}></Route> }
   {
    useCtx.isLoggedIn &&
    <Route path='/Logout?' element={ <Logout/>} exect></Route>
   }
   
   <Route path='*' element={ <Login/>} exect></Route>
   
    
   </Routes>
   </Router>
  
  );
}

export default App;
