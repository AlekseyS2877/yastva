import dispatcher from "../appDispatcher";
import { getGoodsByCategory, delGoods, addNewGoods } from "../api/goodsAPI";
import actionTypes from "./actionTypes";

const saveFood = async (goods) => {
   console.log(goods);
   const savedFood = await addNewGoods(goods);

   dispatcher.dispatch({
      actionType: goods.id ? actionTypes.UPDATE_FOOD : actionTypes.CREATE_FOOD,
      food: savedFood,
   });
};

const loadFoods = async () => {
   const foods = await getGoodsByCategory();
   dispatcher.dispatch({
      actionType: actionTypes.LOAD_FOODS,
      foods: foods,
   });
};

const deleteFood = (id) => {
   delGoods(id);
   dispatcher.dispatch({
      actionType: actionTypes.DELETE_FOOD,
      id: id,
   });
};

export { saveFood, loadFoods, deleteFood };
