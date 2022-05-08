import { Fragment } from 'react'
import classes from './backgroundcomponent.module.css'
const Background=(props)=>{

    return(
        <Fragment>
            <div>  </div>
            <div className={classes.mainbox}>
                {props.children}
            </div>
        </Fragment>
    )

}
export default Background