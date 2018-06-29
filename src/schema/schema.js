import { GQC } from 'graphql-compose';

import FoodTC from './types/Food'


const baseUrl = 'http://localhost:8080/wp-json'

GQC.rootQuery().addFields({
  food: {
    type: FoodTC,

    resolve: (_) =>
      fetch(`${baseUrl}/acf/v3/foods`).then(r => r.json())
  }
})

const schema = GQC.buildSchema();
export default schema;
