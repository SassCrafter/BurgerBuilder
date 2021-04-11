import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

function Modal({ children, show, closeModal }) {
	return (
		<>
			<Backdrop show={show} clickHandler={closeModal} />
			<div className={`${classes.Modal} ${show ? classes.Show : ''}`}>
				{children}
			</div>
		</>
	)
}

export default Modal