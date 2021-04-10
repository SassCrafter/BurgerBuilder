import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
}


class BurgerBuilder extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 ingredients: {
			 	salad: 0,
			 	bacon: 0,
			 	cheese: 0,
			 	meat: 0,
			 },
			 totalPrice: 4
		}
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients};
		console.log(updatedIngredients[type])
		updatedIngredients[type] = newCount;
		console.log(updatedIngredients[type])

		const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount - 1;
		if (newCount < 0) {
			return;
		}
		const updatedIngredients = {...this.state.ingredients};
		console.log(updatedIngredients[type])
		updatedIngredients[type] = newCount;
		console.log(updatedIngredients[type])

		const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
	}

	render() {

		const disabledInfo = {...this.state.ingredients};

		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<>
				<div>Burger</div>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					addIngredientHandler={this.addIngredientHandler} 
					removeIngredientHandler={this.removeIngredientHandler}
					ingredients={this.state.ingredients}
					disabledInfo={disabledInfo}
					price={this.state.totalPrice} />
			</>
		)
	}
}

export default BurgerBuilder