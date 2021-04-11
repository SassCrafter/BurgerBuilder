import React from 'react'

import classes from './Button.module.css'

const types = {
	'danger': classes.Danger,
	'success': classes.Success,
}

function Button({children, btnType, clickHandler}) {
	return (
		<button onClick={clickHandler} className={[classes.Button, types[btnType]].join(' ')}>{children}</button>
	)
}

export default Button