import { Fragment } from "react"
import classes from './certifications.module.css'
import {Row,Col} from 'reactstrap'
import Photo from '../images/react.png'
import Angular from '../images/angular.png'
import Python from '../images/python.png'
import JS from '../images/js.png'
const Certifications=()=>{
    console.log(window.screen.width)
    const react=()=>{
        window.open("https://www.udemy.com/certificate/UC-ad989f70-4b36-43a7-85c9-adb1aae72862/")
    }
    const js=()=>{
        window.open("https://www.udemy.com/certificate/UC-cc45ed0d-123f-4e87-8cb8-52a8413f795f/")
    }
    const angular=()=>{
        window.open("https://www.coursera.org/account/accomplishments/certificate/F282YUHDK8ST")
    }
    const python=()=>{
        window.open("https://cutshort.io/certificate/63740")
    }
    return (
        <Fragment>
            <div className={classes.title}>Certificates</div>
            <div className={classes.certifications}>
                <Row>
                    <Col  onClick={react} lg='5'className={classes.certificateinfo}>
                       <Row className={classes.rowdata}>
                           <Col xs='3' className={classes.removePadding}>
                                <div className={classes.certificateicon}><img src={ Photo }  height ="50" className={classes.photo} /></div>
                           </Col>
                           <Col lg='9'>
                                 <span className={classes.certificatedetails}>React- The Complete Guide</span>
                                 <div className={classes.certiid}>
                                    <span title='UC-ad989f70-4b36-43a7-85c9-adb1aae72862'>Credential ID UC-ad989f70-4b36-43a7-85c9-adb1aae72862</span>
                                 </div>
                                 <div className={classes.certidate}>
                                    <span>May 2022</span>
                                 </div>
                           </Col>
                       </Row>
                         
                    </Col>
                    <Col xs='1'></Col>
                    <Col  onClick={angular} lg='5'className={classes.certificateinfo}>
                       <Row>
                           <Col xs='3'  className={classes.removePadding}>
                                <div className={classes.certificateicon}><img src={ Angular }  height ="60" className={classes.photo} /></div>
                           </Col>
                           <Col lg='9'>
                                 <span className={classes.certificatedetails}>Angular</span>
                                 <div className={classes.certiid}>
                                    <span title='F282YUHDK8ST'>Credential ID F282YUHDK8ST</span>
                                 </div>
                                 <div className={classes.certidate}>
                                    <span>May 2020</span>
                                 </div>
                           </Col>
                       </Row> 
                    </Col>
                </Row>
                <Row  style={{'margin-top':"2%"}}>
                    <Col onClick={python} lg='5'className={classes.certificateinfo}>
                        <Row>
                           <Col xs='3' className={classes.removePadding}>
                                <div className={classes.certificateicon}><img src={ Python }  height ="60" className={classes.photo} /></div>
                           </Col>
                           <Col lg='9'>
                                 <span className={classes.certificatedetails}>Certified Python - Advanced</span>
                                 <div className={classes.certiid}>
                                    <span title='63740'>Credential ID 63740</span>
                                 </div>
                                 <div className={classes.certidate}>
                                    <span>March 2022</span>
                                 </div>
                           </Col>
                       </Row>
                    </Col>
                    <Col xs='1'></Col>
                    <Col onClick={js}  lg='5'className={classes.certificateinfo}>
                        <Row>
                            <Col xs='3' className={classes.removePadding}>
                                    <div className={classes.certificateicon}><img src={ JS }  height ="60" className={classes.photo} /></div>
                            </Col>
                            <Col lg='9'>
                                    <span className={classes.certificatedetails}>Modern Javascript</span>
                                    <div className={classes.certiid}>
                                        <span title='UC-cc45ed0d-123f-4e87-8cb8-52a8413f795f'>Credential ID UC-cc45ed0d-123f-4e87-8cb8-52a8413f795f</span>
                                    </div>
                                    <div className={classes.certidate}>
                                        <span>March 2022</span>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Certifications