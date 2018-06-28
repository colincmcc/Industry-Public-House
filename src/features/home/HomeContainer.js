import React, { Component } from 'react'
import { connect } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingComponent from '../../common/components/loading/LoadingComponent'
import HomeComponent from './HomeComponent'

export class HomeContainer extends
Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data

    if(!data) {
      return <LoadingComponent />
    }


    return (

      // TODO: combine food & drink features by using router & props since data structure is the same

      <HomeComponent  />

    )
  }
}

const mapQueriesToProps = ({ ownProps, state }) => {
  return {
    data: {
      query: gql`
        query {
          pageBy(uri: "header"){
            uri
            backgroundImageField{
              value
            }
          }
        }
      `
    }
  }
}
export default connect({
  mapQueriesToProps
})(HomeContainer)