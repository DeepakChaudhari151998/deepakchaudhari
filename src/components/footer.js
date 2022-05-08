import classes from './footer.module.css'
import {Row,Col} from 'reactstrap'
const Footer=()=>{

    
    return(
        <div className={classes.footer}>
          <Row className={classes.socialmedia}>
              <Col xs="1">
                <a href="https://www.linkedin.com/in/deepak-chaudhari-79a682150/" target='_blank' rel='noopener noreferrer'>Linkdine</a>
              </Col>
              <Col xs="1">
                 <a href="https://twitter.com/deepakcha151998" target='_blank' rel='noopener noreferrer'>Twitter</a>
              </Col>
              <Col xs="1">
                <a href="https://www.instagram.com/cdeepak98/" target='_blank' rel='noopener noreferrer'>Instagram</a>
              </Col>
              <Col lg='7'></Col>
              <Col  className={classes.mark}>
                 <span>Create by Deepak Chaudhari</span>
              </Col>
          </Row>
        </div>
    )
}

export default Footer