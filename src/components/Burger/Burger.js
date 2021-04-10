import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

function Burger({ ingredients }) {
	const transformedIngredients = Object.keys(ingredients)
		.map(igKey => {
			return [...Array(ingredients[igKey])].map((_, idx) => (
				<BurgerIngredient key={igKey + idx} type={igKey}/>
			))
		}).reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients.length > 0 ? 
				transformedIngredients :
				<h3>Please add ingredients</h3>}
			<BurgerIngredient type='bread-bottom' />
		</div>
	)
}

export default Burger