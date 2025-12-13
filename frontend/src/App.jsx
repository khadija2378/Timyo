
import './App.css'
import Register from './page/register'
import Login from './page/login'
import Navbar from './page/navbar'
import { Route, Routes } from 'react-router-dom'
import AddAppointment from './page/addAppointment'
import ListeAppointment from './page/listeAppointment'
import Dashbord from './page/dashbord'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addAppointment' element={<AddAppointment/>}/>
      <Route path='/listeAppointment' element={<ListeAppointment/>}/>
      <Route path='/dashbord' element={<Dashbord/>}/>
    </Routes>
    
     
     
    </>
  )
}

export default App
