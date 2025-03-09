import {React,useEffect} from 'react'
import Home from './Pages/Home/Home'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Login from '../src/Pages/Login/Login'
import Player from '../src/Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'


const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        navigate('/');
      }
      else{
        navigate('./login');
      }
    })
  },[])
  
    return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
      
     

      
    </div>
  )
}



 
    


export default App;