import React, { Component } from 'react'
import { Query } from "react-apollo";

import gql from "graphql-tag";
import MobileNavComponent from './MobileNavComponent'
import MobileNavMenu from './MobileNavMenu'
import HeaderContainer from './header/HeaderContainer'


// This container controls mobile menu (MobileNavMenu) state and nav state (NavComponent)
// Todo: load menu items from Wordpress gql

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsShown: false,
      navIsShown: true,
      scrollDirection: "",
      lastScrollPos: 0

    };
    this.handleScroll = this.handleScroll.bind(this);
    this.burgerToggle = this.burgerToggle.bind(this);

  }

  componentDidMount () {
    this.handleScroll();
  }

  // If navbar is visible (navIsShown is true), then check to see if current scroll position is greater than the last scroll position.  If true, then set state of scrollDirection to "DOWN".
  //Else, or if navbar is not visible, check to see if current scroll position is less than the last scroll position.  If true, set state of scrollDirection to "UP".





  handleScroll = () => {
    var last_known_scroll_position = 0;
    var ticking = false;

    const toggleBottomBar = (scrollPos) => {
      var prevScrollPos = this.state.lastScrollPos
      var navIsShown = this.state.navIsShown

      this.setState({lastScrollPos: last_known_scroll_position})
      if (navIsShown) {
        if(scrollPos > prevScrollPos){
          this.setState({
            scrollDirection: "DOWN",
            navIsShown: false
          })

        }
      } else{
        if(scrollPos < prevScrollPos){
          this.setState({
            scrollDirection: "UP",
            navIsShown: true
          })
        }
      }
    }
    window.addEventListener('scroll', function(e) {

      last_known_scroll_position = window.scrollY;
      if (!ticking) {

        window.requestAnimationFrame(function() {
          console.log(last_known_scroll_position)
          toggleBottomBar(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;

      }

    });
  }

  burgerToggle() {
    const { menuIsShown } = this.state;
    if (menuIsShown) {
      this.setState({ menuIsShown: false });
    } else {
      this.setState({ menuIsShown: true });
    }
  }

  // backgroundOpacity sets the background for the nav based on the scroll position/viewheight in pixels in 50px increments.  Should stop if opacity=1
  // the transition is faded with css in the component to allow smoother ui.
  render() {
    const { menuIsShown, navIsShown } = this.state;
    return (
      <Query query={NAV_QUERY}>
        {
          ({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            return (
            <div>
              <HeaderContainer />
              <MobileNavComponent navIsShown={navIsShown} burgerToggle={this.burgerToggle} menuIsShown={menuIsShown} />
              <MobileNavMenu burgerToggle={this.burgerToggle} menuIsShown={menuIsShown} />
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
