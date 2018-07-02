import React, { Component } from 'react'
import {Query, Mutation} from 'react-apollo'
import gql from 'graphql-tag'

import FoodNavComponent from "../food/FoodNavComponent";
import FoodDrinkComponent from '../common/FoodDrinkComponent'

// * Highest level Food Menu component

// ! Currently usine a Query in HomeContainer local state as a variable here.  Eventually will move to @export to contain queries.
// See here https://github.com/apollographql/apollo-link-state/issues/168


const FoodContainer = (props) => {

  const navItems = [
    { label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
    { label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
    { label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
    { label: "Handhelds", link: "/Home/Food/Handhelds", slug: "handhelds" },
    { label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
    { label: "Sustenance", link: "/Home/Food/Sustenance", slug: "sustenance" }
  ];
  const selectedFoodType = props.selectedFoodType

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
        return (
        <div>
          <FoodNavComponent client={client} selectedFoodType={selectedFoodType} navItems={navItems} />
          <FoodDrinkComponent foods={selectedFoods} />
        </div>
      )

      }
    }
    </Query>
  )

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