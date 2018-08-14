const homeResolvers = {
  defaults: {
    selectedFoodType: 'brunch',
    selectedDrinkType: 'cocktails',
    lvTaps: [],
    nfTaps: [],
    foodItems: [],
    drinkItems: [],
  },
  resolvers: {
    Mutation: {
      selectFoodType: (_, { selectedFoodType }, { cache }) => {
        cache.writeData({ data: { selectedFoodType } });
        return null;
      },
      selectDrinkType: (_, { selectedDrinkType }, { cache }) => {
        cache.writeData({ data: { selectedDrinkType } });
        return null;
      },

    },
  },
};

export default homeResolvers;
