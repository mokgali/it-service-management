import Menu  from "./menu"
import Styles from "./appHeader.module.css"

function AppHeader({logo}){
console.log(Styles.appHeader)
console.log(Styles.appLogo)
return(
   <header className= {Styles.appHeader}>
    <img src={logo} className={Styles.appLogo} alt="logo" />   
    <span>IT Service Management</span>
    <Menu></Menu>
  </header> 
)
}
export default AppHeader