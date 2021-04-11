import React from 'react'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

function OrderSummary({ ingredients, cancelPurchase, continuePurchase, price }) {
	const summary = Object.keys(ingredients)
		.map(igKey => {
			return ({
				name: igKey,
				amount: ingredients[igKey]
			})
		});
	return (
		<>
			<h3 className={classes.Title}>Your Order</h3>
			<h5 className={classes.Subtitle}>A delicious burger with following ingredients: </h5>
			<ul className={classes.List}>
				{summary.map((el) => (
					<li key={el.name}>
						{el.name}: {el.amount}
					</li>
				))}
			</ul>
			<h3>Total Price: {price.toFixed(2)}$</h3>
			<p>Continue to checkout</p>
			<Button btnType='danger' clickHandler={cancelPurchase}>Cancel</Button>
			<Button btnType='success' clickHandler={continuePurchase}>Continue</Button>
		</>
	)
}

export default OrderSummary