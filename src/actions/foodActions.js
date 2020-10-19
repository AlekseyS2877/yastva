import dispatcher from "../appDispatcher";
import * as foodApi from "../api/foodApi";
import actionTypes from "./actionTypes";

export function saveFood(food) {
  return foodApi.saveFood(food).then((savedFood) => {
    // Hey dispatcher, go tell all the stores that a food was just created.
    dispatcher.dispatch({
      actionType: food.id ? actionTypes.UPDATE_FOOD : actionTypes.CREATE_FOOD,
      food: savedFood,
    });
  });
}

export function loadFoods() {
  return foodApi.getFoods().then((foods) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_FOODS,
      foods: foods,
    });
  });
}

export function deleteFood(id) {
  return foodApi.deleteFood(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_FOOD,
      id: id,
    });
  });
}
