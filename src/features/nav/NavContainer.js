import React, { Component } from 'react'
import { Query } from "react-apollo";

import gql from "graphql-tag";
import NavComponent from './NavComponent'
import MobileNavMenu from './MobileNavMenu'

// This container controls mobile menu (MobileNavMenu) state and nav state (NavComponent)
// Todo: load menu items from Wordpress gql

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
      var maxScrollHeight = Math.ceil(window.innerHeight);
      const currentOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1);
      if (currentOpacity === 1){null}
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

  // backgroundOpacity sets the background for the nav based on the scroll position/viewheight in pixels in 50px increments.  Should stop if opacity=1
  // the transition is faded with css in the component to allow smoother ui.
  render() {
    const { isActive } = this.state;
    var maxScrollHeight = Math.ceil(window.innerHeight-200);
    const backgroundOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1) || 0
    return (
      <Query query={NAV_QUERY}>
        {
          ({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            return (
            <div>
              <NavComponent burgerToggle={this.burgerToggle} isActive={isActive} backgroundOpacity={backgroundOpacity} />
              <MobileNavMenu burgerToggle={this.burgerToggle} isActive={isActive} />
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
 allHeaders{
   id
 }
}
`
