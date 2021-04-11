import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'

function SideDrawer({ isOpen, closeHandler }) {
	return (
		<>
			<Backdrop show={isOpen} clickHandler={closeHandler}/>
			<div className={[classes.SideDrawer, isOpen && classes.Open].join(' ')}>
				<div className={classes.Logo}>
					<Logo height='70px'/>
				</div>
				<nav>
					<NavItems />
				</nav>
			</div>
		</>
	)
}

export default SideDrawer