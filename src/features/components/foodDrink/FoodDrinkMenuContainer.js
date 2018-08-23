import React from 'react';
import { Query } from 'react-apollo';
import FoodDrinkComponent from './FoodDrinkListComponent';
import TapListComponent from '../digitalPour/TapListComponent';

const FoodDrinkMenuContainer = (props) => {
  const { type, query, variables } = props;
  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (type === 'taps') {
          return (
            <TapListComponent data={data} loading={loading} error={error} />
          );
        }
        return (
          <FoodDrinkComponent data={data} loading={loading} error={error} />
        );
      }}
    </Query>
  );
};

export default FoodDrinkMenuContainer;
