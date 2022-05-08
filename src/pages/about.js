import { Fragment } from "react"
import Navbar from "./navbar"
import Photo from '../images/photo.jpeg'
import Background from "../components/backgroundcomponent"
import Recommendationscomp from "../components/Recommendations.js"
import Certifications from "../components/certifications.js"
import Footer  from "../components/footer"
import classes from './about.module.css'
import { useHistory } from "react-router-dom"

import {
   Row, Col, Button
  
} from 'reactstrap';


const About=()=>{
  const history=useHistory()
  const ContactClick=()=>{
    history.push("/deepakchaudhari/contact");
  }
  return (
      <Fragment>
           <Background>
             <Navbar/>
              <div className={classes.main}>
                  <Row>
                    <Col xs lg="4" style={{"display":"inline-block"}}>
                        <img src={ Photo }  height ="250" className={classes.photo} />
                    </Col>
                    <Col className={classes.info} >
                        <div className={classes.designation}>Software Developer</div>
                         <p>I am a hardworking individual dedicated to my work. I see myself as a good team player and I am always keen to learn new things be it a new technology or language.</p>
                         <p>I'm currently working as an Software Developer at <br></br><a href="http://revalanalytics.com/">Reval analytics service</a> in Pune.</p>
                         <div>
                           <Button  className={classes.downloadcv} href="https://drive.google.com/file/d/1eESLqmdu8S4emf_uX9eUqkMMDXvoj5xX/view?usp=sharing" target='_blank' rel='noopener noreferrer' >Download CV</Button>
                           <Button  onClick={ContactClick} className={classes.contact}>Contact</Button>
                          </div>
                    </Col>
                  </Row>
                </div>
                <Recommendationscomp />
                <Certifications/>
                <Footer/>
            </Background>
            
      </Fragment>
     
  )
}
export default About