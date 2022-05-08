import { NavLink,acti} from 'react-router-dom'
import classes from './navbar.module.css'
import Dlogo from '../images/D.jpeg'

const Navbar=()=>{
  const resume=()=>{
    window.open("https://drive.google.com/file/d/1eESLqmdu8S4emf_uX9eUqkMMDXvoj5xX/view?usp=sharing");
  }
    return (
          
            <div>
              <div style={{'display':'inline-block'}}>
                <img src={ Dlogo} className={classes.logo} height="40" /> 
                <div className={classes.name}>Deepak<span > Chaudhari</span></div>
              </div>
              <ul>
                <li><NavLink activeClassName={classes.activeclass} className={classes.textdeco} to='/about'>About</NavLink></li> 
                {/* <li><NavLink className={classes.textdeco} to='/about'>Blog</NavLink></li> */}
                <li><NavLink className={classes.textdeco} onClick={resume} to='/'>Resume</NavLink></li>
                <li><NavLink activeClassName={classes.activeclass} className={classes.textdeco} to='/contact'>Contact</NavLink></li>
              </ul> 
            </div>
            
              
                
    )
}

export default Navbar