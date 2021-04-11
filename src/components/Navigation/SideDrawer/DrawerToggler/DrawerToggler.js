import React from 'react'
import classes from './DrawerToggler.module.css'

function DrawerToggler({ drawerOpen, clickHandler}) {
	return (
		<div onClick={clickHandler} className='mobileOnly'>
			{drawerOpen ? 
				<i className="fas fa-times"></i> :
				<i className="fas fa-bars"></i>
			}
		</div>
	)
}

export default DrawerToggler