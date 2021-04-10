import React from 'react'
import classes from './Layout.module.css';

function Layout({ children }) {
	return (
		<>
			<div>ToolBar, Sidedrawer, Backdrop</div>
			<main className={classes.Content}>
				{children}
			</main>
		</>
	)
}

export default Layout