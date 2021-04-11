import React from 'react'
import LogoImg from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css'

function Logo({ bg='white', height }) {
	return (
		<div style={{backgroundColor: bg, height,}} className={classes.Logo}>
			<img src={LogoImg} alt='MyBurger'/>
		</div>
	)
}

export default Logo