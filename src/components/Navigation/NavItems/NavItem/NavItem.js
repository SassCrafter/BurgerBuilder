import React from 'react'
import classes from './NavItem.module.css'

function NavItem({ children, active, ...restProps }) {
	return (
		<li className={classes.NavItem}>
			<a className={active ? classes.active : null} {...restProps}>{children}</a>
		</li>
	)
}

export default NavItem