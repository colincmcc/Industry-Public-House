import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import FoodNavComponent from "./FoodNavComponent";
import FoodDrinkComponent from '../common/FoodDrinkComponent'
import FoodComponent from './FoodComponent'

// * Highest level Food Menu component

// ! Currently usine a Query in HomeContainer local state as a variable here.  Eventually will move to @export to contain queries.
// See here https://github.com/apollographql/apollo-link-state/issues/168


const FoodContainer = (props) => {

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

        const ownProps = {
          client,
          selectedFoodType,
          selectedFoods
        }
        const navItems = [
          { id: 0, label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
          { id: 1, label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
          { id: 2, label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
          {
            id: 3,
            label: "Handhelds",
            link: "/Home/Food/Handhelds",
            slug: "handhelds"
          },
          { id: 4, label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
          {
            id: 5,
            label: "Sustenance",
            link: "/Home/Food/Sustenance",
            slug: "sustenance"
          }
        ];
        return (
        <div>
          <FoodNavComponent
          client={client}
          navItems={navItems}
          />
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
    allFoods{
      id
      acf{
        price
        food_type
        name
        description
      }
    }
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