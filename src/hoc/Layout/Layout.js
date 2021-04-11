import React, { Component } from 'react'
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
	constructor(props) {
		super(props)
	
		this.state = {
			 isSideDrawerOpen: false,
		}
	}


	closeSideDrawerHandler = () => {
		this.setState({isSideDrawerOpen: false})
	}
	openSideDrawerHandler = () => {
		this.setState({isSideDrawerOpen: true})
	}

	render() {
		return (
			<>
	      		<Toolbar 
	      			drawerOpen={this.state.isSideDrawerOpen}
	      			openDrawerHandler={this.openSideDrawerHandler}
	      		/>
	      		<SideDrawer 
	      			isOpen={this.state.isSideDrawerOpen} 
	      			closeHandler={this.closeSideDrawerHandler}
	      		/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</>
		)
	}
}

export default Layout