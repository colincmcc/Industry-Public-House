export const REQUEST_FOODS = 'REQUEST_FOODS'
export const RECEIVE_FOODS = 'RECEIVE_FOODS'
export const SELECT_FOODTYPE = 'SELECT_FOODTYPE'
export const INVALIDATE_FOODTYPE = "INVALIDATE_FOODTYPE";


export const selectFoodType = foodType => ({
  type: SELECT_FOODTYPE,
  foodType
})

export const requestFoods = (foodType) => ({
  type: REQUEST_FOODS,
  foodType
})

export const receiveFoods = (foodType, json) => ({
  type: RECEIVE_FOODS,
  foodType,
  foods: json.edges,
})

export const invalidateFoodType = foodType => ({
  type: INVALIDATE_FOODTYPE,
  foodType
});
