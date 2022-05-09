

import About from './pages/about';
import {Route,Switch} from 'react-router-dom';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import image from './images/main_bg_14.png'
import Contact from './pages/contact';

function App() {
  
 
  return (
    <Fragment>
          <Switch basename={process.env.PUBLIC_URL}>
            
            <Route path='/deepakchaudhari/about'  exact>
              <About />
            </Route>
            <Route path="/deepakchaudhari/contact">
               <Contact/>       
            </Route>
            <Route path="/">
              <Redirect to="/deepakchaudhari/about"/>          
            </Route>
            <Route path="*">
              <Redirect to="/deepakchaudhari/about"/>     
            </Route>
          </Switch>
    </Fragment>
  );
}

export default App;
