import React from 'react'
import classes from './BuildControl.module.css'
function BuildControl({ label, addIngredientHandler, removeIngredientHandler, disabled }) {
	return (
		<div className={classes.BuildControl}>
			<h4 className={classes.Label}>{label}</h4>
			<button className={classes.Less} disabled={disabled} onClick={removeIngredientHandler}>Less</button>
			<button className={classes.More} onClick={addIngredientHandler}>More</button>
		</div>
	)
}

export default BuildControl