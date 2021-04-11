import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


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
			 totalPrice: 4,
			 purchasable: false,
			 purchasing: false,
		}
	}

	updatePurchasable(ingredients) {
		const totalAmount = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			}).reduce((sum, el) => {
				return sum + el
			}, 0)
		this.setState({purchasable: totalAmount > 0})
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = newCount;

		const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
		this.updatePurchasable(updatedIngredients);
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
		this.updatePurchasable(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {
		alert('You continued');
		this.setState({purchasing: false})
	}

	render() {

		const disabledInfo = {...this.state.ingredients};

		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<>
				<Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
					<OrderSummary 
						cancelPurchase={this.purchaseCancelHandler} 
						continuePurchase={this.purchaseContinueHandler}
						ingredients={this.state.ingredients}
						price={this.state.totalPrice} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					addIngredientHandler={this.addIngredientHandler} 
					removeIngredientHandler={this.removeIngredientHandler}
					ingredients={this.state.ingredients}
					disabledInfo={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					purchaseHandler={this.purchaseHandler} />
			</>
		)
	}
}

export default BurgerBuilder