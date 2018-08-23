import React from 'react';
import { Query } from 'react-apollo';
import FoodDrinkComponent from '../components/FoodDrinkComponent';

const FoodMenuComponent = (props) => {
  const { variables, query } = props;

  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => (
        <FoodDrinkComponent data={data} loading={loading} error={error} />
      )}
    </Query>
  );
};

export default FoodMenuComponent;
