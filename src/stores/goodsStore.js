import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import * as api from "../api/goodsAPI";

const goodsStore = new EventEmitter();

const actions = (action) => {
   switch (action.actionType) {
      case actionTypes.GOODS_DELETE:
         api.delDoc(action.id);
         break;
      case actionTypes.GOODS_CREATE:
         api.addNewGoods(action.fakeGoods);
         break;
      case actionTypes.GOODS_UPDATE:
         api.updateGoods(action.fakeGoods);
         break;
      case actionTypes.GOODS_LOAD:
         api.getGoods();
         break;
      case actionTypes.GOODS_NEW_LOAD:
         api.getNewGoods(action.count);
         break;
      case actionTypes.GOODS_ARRIVED:
         goodsStore.emit("change", action.goodsList);
         break;
      case actionTypes.GOODS_FIND_BY_URL:
         api.getGoodsByURL(action.code);
         break;
      case actionTypes.GOODS_FIND_BY_URL_ARRIVED:
         goodsStore.emit(
            `${actionTypes.GOODS_FIND_BY_URL_ARRIVED}[${action.goods.url}]`,
            action.goods
         );
         break;
      default:
         break;
   }
};

Dispatcher.register(actions);

export default goodsStore;
