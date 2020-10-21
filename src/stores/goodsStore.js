import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import * as api from "../api/goodsAPI";

const CHANGE_EVENT = "change";

const goodsStore = new EventEmitter();

const actions = (action) => {
   switch (action.actionType) {
      case actionTypes.GOODS_DELETE:
         api.delGoods(action.id);
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
      case actionTypes.GOODS_ARRIVED:
         goodsStore.emit(CHANGE_EVENT, action.goodsList);
         break;
      case actionTypes.GOODS_FIND_BY_CODE:
         api.getGoodsByCode(action.code);
         break;
      case actionTypes.GOODS_FIND_BY_CODE_ARRIVED:
         goodsStore.emit(action.actionType, action.goods);
         break;
      default:
         break;
   }
};

Dispatcher.register(actions);

export default goodsStore;
