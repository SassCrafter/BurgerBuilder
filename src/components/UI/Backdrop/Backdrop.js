import React from 'react'
import classes from './Backdrop.module.css'

function Backdrop({ show, clickHandler }) {
	return show ? <div className={classes.Backdrop} onClick={clickHandler}></div> : null
}

export default Backdrop