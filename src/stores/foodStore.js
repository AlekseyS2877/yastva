import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _foods = [];

class FoodStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getFoods() {
    return _foods;
  }

  getFoodByToken(token) {
    return _foods.find((food) => food.code === token);
  }
}

const store = new FoodStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_FOOD:
      _foods = _foods.filter((food) => food.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.CREATE_FOOD:
      _foods.push(action.food);
      store.emitChange();
      break;
    case actionTypes.UPDATE_FOOD:
      _foods = _foods.map((food) =>
        food.id === action.food.id ? action.food : food
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_FOODS:
      _foods = action.foods;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
