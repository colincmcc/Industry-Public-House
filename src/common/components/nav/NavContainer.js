import React, { Component } from 'react'
import NavComponent from './NavComponent'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import NavComponent from './NavComponent'

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.burgerToggle = this.burgerToggle.bind(this);
  }

  burgerToggle() {
    const { isActive } = this.state;
    if (isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }
  render() {
    const { isActive } = this.state;

    return (
      <Query query={NAV_QUERY}>
        {
          ({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            console.log(data.HeaderPage)
            return <NavComponent isActive={isActive} />

          }
        }
      </Query>
    )
  }
}

const NAV_QUERY = gql`

`