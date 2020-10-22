import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

const saveGoods = (goods) => {
   dispatcher.dispatch({
      actionType: goods.id ? actionTypes.GOODS_UPDATE : actionTypes.GOODS_CREATE,
      fakeGoods: goods,
   });
};

const loadGoods = () => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const loadNewGoods = (count) => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_NEW_LOAD,
      count,
   });
};

const deleteGoods = (id) => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_DELETE,
      id,
   });
};

const getGoodsByURL = (code) => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_FIND_BY_URL,
      code,
   });
};

export { saveGoods, loadGoods, loadNewGoods, deleteGoods, getGoodsByURL };
