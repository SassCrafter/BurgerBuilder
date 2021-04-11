import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

function Toolbar({drawerOpen, openDrawerHandler}) {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggler drawerOpen={drawerOpen} clickHandler={openDrawerHandler}/>
			<Logo height='80%'/>
			<nav className='desktopOnly'>
				<NavItems />
			</nav>
		</header>
	)
}

export default Toolbar