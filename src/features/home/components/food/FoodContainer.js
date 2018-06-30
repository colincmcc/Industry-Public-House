import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'

import MenuNavComponent from "../common/MenuNavComponent";
import FoodDrinkComponent from '../common/FoodDrinkComponent'

// * Highest level Food Menu component


class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFoodType: "brunch"
    };
    this.foodMenuToggle = this.foodMenuToggle.bind(this);
  }

 foodMenuToggle = selectedFoodType => this.setState(() => ({selectedFoodType}))


  render() {
    const navItems = [
      { label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
      { label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
      { label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
      { label: "Handhelds", link: "/Home/Food/Handhelds", slug: "handhelds" },
      { label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
      { label: "Sustenance", link: "/Home/Food/Sustenance", slug: "sustenance" }
    ];
    const { selectedFoodType } = this.state
    return (
      <Query query={WP_FOODS} variables={{selectedFoodType}}>
      {
        ({ loading, error, data, client }) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>

          const selectedFoods = data.foodsBy.map( food => ({
            id: food.id,
            price: food.acf.price,
            type: food.acf.type,
            name: food.acf.name,
            description: food.acf.description
          }))
          console.log(selectedFoods)
          return (
          <div>
            <MenuNavComponent client={client} selectedFoodType={selectedFoodType} navItems={navItems} foodMenuToggle={this.foodMenuToggle} />
            <FoodDrinkComponent foods={selectedFoods} />
          </div>
        )

        }
      }
    </Query>
    )
  }
}


export default FoodContainer

export const WP_FOODS = gql`
  query Foods($selectedFoodType: String!){
    foodsBy(foodType: $selectedFoodType){
      id
      acf{
        price
        food_type
        name
        description
      }
    }
  }
`