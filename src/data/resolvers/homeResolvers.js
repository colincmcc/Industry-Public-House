const homeResolvers = {
  defaults: {
    selectedFoodType: "brunch",
    selectedDrinkType: "cocktails",
    currentLocation: 1,
    lvTaps: [],
    nfTaps: [],
    foodItems: [],
    drinkItems: []
  },
  resolvers: {
    Mutation: {
      selectFoodType: (_, { selectedFoodType }, { cache }) => {
        cache.writeData({ data: { selectedFoodType: selectedFoodType } });
        return null;
      },
      selectDrinkType: (_, { selectedDrinkType }, { cache }) => {
        cache.writeData({ data: { selectedDrinkType: selectedDrinkType } });
        return null;
      },
      selectLocation: (_, { currentLocation }, { cache }) => {
        cache.writeData({ data: { currentLocation: currentLocation } });
        return null;
      },
    }
  }
}

export default homeResolvers;