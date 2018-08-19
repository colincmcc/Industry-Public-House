import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import MobileNavComponent from './mobileNav/MobileNavComponent';
import WideNavContainer from './wideNav/WideNavContainer';

const NAV_QUERY = gql`
  {
    pageBy(slug: "home") {
      acf {
        hero_image
      }
    }
    mobileMenuOpen @client
  }
`;


// This container controls mobile menu (MobileNavMenu) state and nav state (NavComponent)
// Todo: load menu items from Wordpress gql
// TODO: move scroll logic higher up

export const mobileNavItems = [
  { label: 'Home', link: '/' },
  { label: 'Food', link: '/Food' },
  { label: 'Drinks', link: '/Drink' },
  { label: 'Connect', link: '/Contact' },
  { label: 'Apply', link: '/Apply' },
  { label: 'Events', link: '/Calendar' },
  { label: 'Shop', link: '/Shop' },
];

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsShown: true,
      lastScrollPos: 0,
      scrollDirection: '',
    };
  }

  componentDidMount() {
    this.handleScroll();
  }
  // If navbar is visible (navIsShown is true), then check to see if current scroll position is greater than the last scroll position.  If true, then set state of scrollDirection to "DOWN".
  // Else, or if navbar is not visible, check to see if current scroll position is less than the last scroll position.  If true, set state of scrollDirection to "UP".

  handleScroll = () => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const toggleBottomBar = (scrollPos) => {
      const { lastScrollPos: prevScrollPos, navIsShown } = this.state;

      this.setState({ lastScrollPos: lastKnownScrollPosition });
      if (navIsShown) {
        if (scrollPos > prevScrollPos) {
          this.setState({
            scrollDirection: 'DOWN',
            navIsShown: false,
          });
        }
      } else if (scrollPos < prevScrollPos) {
        this.setState({
          scrollDirection: 'UP',
          navIsShown: true,
        });
      }
    };
    window.addEventListener('scroll', (e) => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleBottomBar(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  }


  render() {
    const { navIsShown } = this.state;


    // ! pageBy query returns an array, despite having only 1 valid value.
    return (
      <Query query={NAV_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            return (
              <div>
                <WideNavContainer headerLogo={data.pageBy[0].acf.hero_image} />
                <MobileNavComponent navIsShown={navIsShown} menuIsShown={data.mobileMenuOpen} />
              </div>
            );
          }
        }
      </Query>
    );
  }
}

export default withRouter(NavContainer);
