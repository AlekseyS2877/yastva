class ActionTypes {
   constructor() {
      this.GOODS_CREATE = "GOODS_CREATE";
      this.GOODS_UPDATE = "GOODS_UPDATE";
      this.GOODS_DELETE = "GOODS_DELETE";
      this.GOODS_LOAD = "GOODS_LOAD";
      this.GOODS_NEW_LOAD = "GOODS_NEW_LOAD";
      this.GOODS_ARRIVED = "GOODS_ARRIVED";
      this.GOODS_FIND_BY_URL = "GOODS_FIND_BY_URL";
      this.GOODS_FIND_BY_URL_ARRIVED = "GOODS_FIND_BY_URL_ARRIVED";
   }
}

export default new ActionTypes();
