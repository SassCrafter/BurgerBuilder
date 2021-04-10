import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

function BuildControls({ ingredients, addIngredientHandler, removeIngredientHandler, disabledInfo, price }) {
	const ingredientLabels = Object.keys(ingredients);
	return (
		<div className={classes.BuildControls}>
			<h3>Current Price: {price.toFixed(2)}$</h3>
			{ingredientLabels.map((item, id) => (
				<BuildControl 
					key={id} 
					label={item}
					addIngredientHandler={() => addIngredientHandler(item)}
					removeIngredientHandler={() => removeIngredientHandler(item)}
					disabled={disabledInfo[item]}
					 />
			))}
			
		</div>
	)
}

export default BuildControls