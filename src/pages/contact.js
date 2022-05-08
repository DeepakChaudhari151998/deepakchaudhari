import Navbar from "./navbar"
import Background from "../components/backgroundcomponent"
import classes from './contact.module.css'
import Footer from "../components/footer"
import {Row,Col} from 'reactstrap'
const Contact=()=>{

    return(
       <div className={classes.main}>
            <Background>
                <Navbar/>
                <div className={classes.contact}>
                    <div className={classes.pagetitle}>
                        <h1 className={classes.contacttitle}>Contact</h1>
                        <div className={classes.pagesubtitle}>
                                <h6>Get in Touch</h6>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col className={classes.ci}>
                        <i className="fa fa-mobile fa-2x" aria-hidden="true"><span className={classes.phone}>+919146070340</span></i>
                    </Col>
                    <Col className={classes.ci}>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"><span className={classes.phone}><a  style={{'color':"black"}}href="mailto:itsdeepakchaudhari@gmail.com">itsdeepakchaudhari@gmail.com</a></span>  </i>
                    </Col>
                    <Col className={classes.ci}>
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true"><span className={`${classes.phone} ${classes.address}`}>Plot No 14,Ambika housing Society,Jalgaon,425001</span></i>
                    
                    </Col>
                </Row>
                <Footer/>
            </Background>

        </div> 
    )
}

export default Contact