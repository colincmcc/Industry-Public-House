import React, { Component } from 'react'
import { connect } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingComponent from '../../common/components/loading/LoadingComponent'
import HomeComponent from './HomeComponent'

export class HomeContainer extends
Component {

  render() {

    if(!data) {
      return <LoadingComponent />
    }


    return (

      // TODO: combine food & drink features by using router & props since data structure is the same

      <HomeComponent  />

    )
  }
}

export default HomeContainer