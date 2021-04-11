import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}

	render() {
		return (
			<>
				<Backdrop show={this.props.show} clickHandler={this.props.closeModal} />
				<div className={`${classes.Modal} ${this.props.show ? classes.Show : ''}`}>
					{this.props.children}
				</div>
			</>
		)
	}
	
}

export default Modal