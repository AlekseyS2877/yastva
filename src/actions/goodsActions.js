import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

const saveGoods = (...params) => {
   dispatcher.dispatch({
      actionType: params[0] ? actionTypes.GOODS_UPDATE : actionTypes.GOODS_CREATE,
      fakeGoods: params,
   });
};

const loadGoods = () => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const deleteGoods = (id) => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_DELETE,
      id: id,
   });
};

const getGoodsByCode = (code) => {
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_FIND_BY_CODE,
      code: code,
   });
};

export { saveGoods, loadGoods, deleteGoods, getGoodsByCode };
