import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { selectFoodType, invalidateFoodType, requestFoods} from '../../../actions/index.js'

import MenuNavComponent from "../common/MenuNavComponent";
import FoodMenuComponent from './FoodMenuComponent'

// * Highest level Food Menu component

class FoodContainer extends Component {
  componentDidMount(){
    const { dispatch, selectedFoodType} = this.props
  }
  handleChange = nextFoodType => {
    this.props.dispatch(selectFoodType(nextFoodType));
  }

  render() {
    const navItems = [
      { label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
      { label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
      { label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
      { label: "Handhelds", link: "/Home/Food/Handhelds", slug: "handhelds" },
      { label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
      { label: "Sustenance", link: "/Home/Food/Sustenance", slug: "sustenance" }
    ];
    const { selectedFoodType, foods } = this.props


    return (
      <Query query={WP_FOODS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>
          return (
          <div>
            <MenuNavComponent value={selectedFoodType} options={navItems} onChange={this.handleChange} />
            <FoodMenuComponent foods={data.foods.edges} />
          </div>
        )

        }
      }
    </Query>
    )
  }
}

const mapStateToProps = state => {
  const {selectedFoodType, foodsByFoodType} = state
  const {
    items: foods
  } = foodsByFoodType[selectedFoodType] || {
    items: []
  }

  return {
    selectedFoodType,
    foods
  }
}

export default connect(mapStateToProps)(FoodContainer)

const WP_FOODS = gql`
  {
    foods{
    edges{
      node{
        id
        title
        content
        priceField {
          value
        }
        foodTypeField{
          value
        }
      }
    }
  }
  }
`