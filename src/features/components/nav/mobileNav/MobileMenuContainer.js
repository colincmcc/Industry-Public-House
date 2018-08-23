import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingComponent from '../../loading/LoadingComponent';
import ErrorComponent from '../../loading/ErrorComponent';
import MobileMenuComponent from './MobileMenuComponent';
import fullLogo from '../../../../common/assets/img/Industry_fullLogo_sm_wht.svg';

// Icons
import Food from '../../../../common/assets/icons/food.svg';
import Email from '../../../../common/assets/icons/email.svg';
import Calendar from '../../../../common/assets/icons/calendar.svg';
import Clipboard from '../../../../common/assets/icons/clipboard-account.svg';
import Cart from '../../../../common/assets/icons/cart.svg';
import LightbulbLogo from '../../svgIcons/lightbulb';
import BeerGlass from '../../svgIcons/beerglass';

const WP_HOME = gql`
  {
    pageBy(slug: "home") {
      acf {
        hero_image
      }
    }
    mobileMenuOpen @client
  }
`;
const MobileMenuContainer = () => {
  const mobileNavItems = [
    { label: 'Home', link: '/', icon: <LightbulbLogo /> },
    { label: 'Food', link: '/Food', icon: <Food /> },
    { label: 'Drinks', link: '/Drink', icon: <BeerGlass /> },
    { label: 'Connect', link: '/Contact', icon: <Email /> },
    { label: 'Apply', link: '/Apply', icon: <Clipboard /> },
    { label: 'Events', link: '/Calendar', icon: <Calendar /> },
    { label: 'Shop', link: '/Shop', icon: <Cart /> },
  ];
  return (
    <Query query={WP_HOME}>
      {
      ({
        data, loading, error, client,
      }) => {
        if (loading) return <LoadingComponent />;
        if (error) return <ErrorComponent />;

        // ! pageBy query returns an array, despite having only 1 valid value.
        const headerLogo = data.pageBy[0].acf.hero_image || fullLogo;

        return (
          <MobileMenuComponent
            client={client}
            logo={headerLogo}
            isOpen={data.mobileMenuOpen}
            navItems={mobileNavItems}
          />
        );
      }
    }
    </Query>
  );
};

export default MobileMenuContainer;
