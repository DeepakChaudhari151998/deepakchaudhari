import { Fragment } from "react"
import classes from './Recommendations.module.css'
import {Row,Col} from 'reactstrap'
const Recommendationscomp=()=>{
    return (
        <Fragment>
            <div className={classes.title}>Recommendations</div>
             <Row className={classes.recommendation}>
                 <Col className={classes.colcss} lg="4">
                    <div>Deepak is a fantastic person to work with,
                        and is not only a multi-skilled person in software
                         development and insightful colleague, but also an inspiring strategist when 
                         it comes to manage real-time issues. Very good person. Great employee with a very 
                         strong problem solving skills. Deepak is an asset to any company.
                    </div>
                    <div className={classes.authdesignation}>
                     <div className={classes.testimonial}>
                               <i className="fa fa-quote-left"></i>
                        </div>
                        <div className={classes.author}>Koustubh G. Kittur</div>
                        <div className={classes.designation}>Angular Developer at Reval</div>
                    </div>
                    
                     
                 </Col>
                 <Col xs='1'></Col>
                 <Col className={classes.colcss}  lg="4">
                     <div>Very cool developer. Very good problem solving skills.</div>
                     <div className={classes.authdesignation}>
                     <div className={classes.testimonial}>
                               <i className="fa fa-quote-left"></i>
                        </div>
                            <div className={classes.author}>Sekhar Banarjee</div>
                            <div className={classes.designation}>AI|NLP|ML</div>
                        
                     </div>
                     
                 </Col>
             </Row>
        </Fragment>
    )
}

export default Recommendationscomp