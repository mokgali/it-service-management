import logo from './logo.svg';
import './App.css';
import AddTicket from './pages/AddTicket';
import LoggedTickets from './pages/LoggedTickets';
import AppHeader from './components/appHeader'
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';


function App() {  
  return( 
  <>   
  <BrowserRouter>
  <AppHeader logo={logo}/>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="dashboard" element={<Dashboard/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="addTicket" element={<AddTicket/>}></Route>
    <Route path="loggedTickets" element={<LoggedTickets/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}




export default App;
