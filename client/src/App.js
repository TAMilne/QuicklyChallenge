import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup  from './pages/Signup.js'
import Profile  from './pages/Profile.js'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <br/><br/>
      <Routes>
        <Route path='/' element={ <Signup/> }/>
        <Route path='/profile' element={ <Profile/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
