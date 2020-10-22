import { apiURL, headers, getFromAPI } from "./helpers";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const getGoods = async () => {
   const result = await getFromAPI(
      "/yastva/_partition/goods/_design/goods/_view/byCode?include_docs=true"
   );
   const newResult = result.rows.map((eachResult) => eachResult.doc);
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_ARRIVED,
      goodsList: newResult,
   });
};

const getNewGoods = async (count) => {
   const result = await getFromAPI(
      `/yastva/_partition/goods/_design/goods/_view/byCode?include_docs=true&limit=${count}&descending=true`
   );
   const newResult = result.rows.map((eachResult) => eachResult.doc);
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_ARRIVED,
      goodsList: newResult,
   });
};

const getDocHead = async (id) => {
   const response = await fetch(`${apiURL}/yastva/${id}`, {
      method: "head",
      headers,
   });

   if (!response.ok) {
      // eslint-disable-next-line no-console
      console.log("Абзац...", response);
      return "";
   }

   return response.headers.get("ETag").slice(1, -1);
};

const delDoc = async (id) => {
   const revID = await getDocHead(id);
   await fetch(`${apiURL}/yastva/${id}?rev=${revID}`, {
      method: "delete",
      headers,
   });

   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const updateGoods = async (fakeGoods) => {
   const revID = await getDocHead(fakeGoods.id);
   const response = await fetch(`${apiURL}/yastva/${fakeGoods.id}?rev=${revID}`, {
      method: "put",
      headers,
      body: JSON.stringify(fakeGoods),
   });
   if (!response.ok) {
      // eslint-disable-next-line no-console
      console.log("Абзац...", response);
   }

   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const addNewGoods = async (fakeGoods) => {
   const responseUUID = await fetch(`${apiURL}/_uuids?count=1`, {
      method: "get",
      headers,
   });
   if (!responseUUID.ok) {
      // eslint-disable-next-line no-console
      console.log("Абзац...", responseUUID);
   }
   const resultUUID = await responseUUID.json();
   const newFakeGoods = fakeGoods;
   newFakeGoods.id = `goods:${resultUUID.uuids[0]}`;

   const response = await fetch(`${apiURL}/yastva/${fakeGoods.id}`, {
      method: "put",
      headers,
      body: JSON.stringify(fakeGoods),
   });
   if (!response.ok) {
      // eslint-disable-next-line no-console
      console.log("Абзац...", response);
   }

   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const getGoodsByURL = async (url) => {
   const result = await getFromAPI(
      `/yastva/_partition/goods/_design/goods/_view/byURL?include_docs=true&keys=["${url}"]`
   );

   if (result.rows.length > 0) {
      dispatcher.dispatch({
         actionType: actionTypes.GOODS_FIND_BY_URL_ARRIVED,
         goods: result.rows[0].doc,
      });
   }
};

export { getGoods, getNewGoods, delDoc, updateGoods, addNewGoods, getGoodsByURL };
