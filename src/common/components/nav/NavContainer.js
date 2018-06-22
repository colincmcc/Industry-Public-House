import React, { Component } from 'react'
import { Query } from "react-apollo";

import gql from "graphql-tag";
import NavComponent from './NavComponent'
import MobileNavMenu from './MobileNavMenu'


export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      burgerOpen: false,
      backgroundOpacity: 0
    };
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  componentDidMount () {
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      const maxScrollHeight = Math.ceil(window.screenY.valueOf)
      console.log(maxScrollHeight)
      console.log(newScrollHeight)

      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
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
    const backgroundOpacity = Math.min( this.state.currentScrollHeight , 1)
    console.log("backgroundOpacity is "+ backgroundOpacity);

    return (
      <Query query={NAV_QUERY}>
        {
          ({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            console.log(data.HeaderPage)
            return (
            <div>
              <NavComponent burgerToggle={this.burgerToggle} isActive={isActive} backgroundOpacity={backgroundOpacity} />
              <MobileNavMenu isActive={isActive} />
            </div>
            )

          }
        }
      </Query>
    )
  }
}

const NAV_QUERY = gql`
{
  posts{
    edges{
      node{
        id
      }
    }
  }
}
`
