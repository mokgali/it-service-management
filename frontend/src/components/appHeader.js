import Menu  from "./menu"
import Styles from "./appHeader.module.css"

function AppHeader({logo}){
return(
   <header className= {Styles.appHeader}>
    <img src={logo} className={Styles.appLogo} alt="logo" />   
    <span>IT Service Management</span>     
    </header> 
)
}
export default AppHeader