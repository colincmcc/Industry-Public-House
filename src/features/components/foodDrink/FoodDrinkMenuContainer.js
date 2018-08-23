import React from 'react';
import { Query } from 'react-apollo';
import FoodDrinkComponent from './FoodDrinkListComponent';
import TapLIstComponent from '../digitalPour/TapLIstComponent';

const FoodDrinkMenuContainer = (props) => {
  const { type, query, variables } = props;
  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (type === 'taps') {
          return (
            <TapLIstComponent data={data} loading={loading} error={error} />
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
