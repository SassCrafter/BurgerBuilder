import React from 'react'
import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem.js'

function NavItems() {
	return (
		<ul className={classes.NavItems}>
			<NavItem active href='/'>Home</NavItem>
			<NavItem href='/'>Checkout</NavItem>
		</ul>
	)
}

export default NavItems