
import './App.css';
import About from './pages/about';
import {Route,Switch} from 'react-router-dom'
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import image from './images/main_bg_14.png'
import Contact from './pages/contact';

function App() {
  
 
  return (
    <Fragment>
          <Switch basename={process.env.PUBLIC_URL}>
            
            <Route path='/about'  exact>
              <About />
            </Route>
            <Route path="/contact">
               <Contact/>       
            </Route>
            <Route path="/">
              <Redirect to="/about"/>          
            </Route>
            <Route path="*">
              <Redirect to="/about"/>     
            </Route>
          </Switch>
    </Fragment>
  );
}

export default App;
