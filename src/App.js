import logo from './logo.svg';
import './App.css';
import AddTicket from './pages/AddTicket';
import LoggedTickets from './pages/LoggedTickets';
import AppHeader from './components/appHeader'
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';


function App() {
  
  return( 
  <>   
  <BrowserRouter>
  <AppHeader logo={logo}/>
  <Routes>
    <Route path="/" element={<LoggedTickets/>}></Route>
    <Route path="addTicket" element={<AddTicket/>}></Route>
    <Route path="loggedTickets" element={<LoggedTickets/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}




export default App;
