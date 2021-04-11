import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

function BuildControls({ ingredients, addIngredientHandler, removeIngredientHandler, disabledInfo, price, purchasable, purchaseHandler }) {
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
			<button disabled={!purchasable}
			 className={classes.OrderButton} onClick={purchaseHandler}>Order Now</button>
			
		</div>
	)
}

export default BuildControls