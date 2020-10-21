import { apiURL, headers, getFromAPI } from "./helpers";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const getGoods = async () => {
   const result = await getFromAPI(
      "/yastva/_partition/goods/_design/goods/_view/goodsByCode?include_docs=true"
   );
   const newResult = result.rows.map((eachResult) => eachResult.doc);
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_ARRIVED,
      goodsList: newResult,
   });
};

const delGoods = async (goodsID) => {
   const responseHead = await fetch(`${apiURL}/yastva/${goodsID}`, {
      method: "head",
      headers,
   });

   if (!responseHead.ok) {
      console.log("Абзац...", responseHead);
      return;
   }

   const response = await fetch(
      `${apiURL}/yastva/${goodsID}?rev=${responseHead.headers.get("ETag").slice(1, -1)}`,
      {
         method: "delete",
         headers,
      }
   );

   console.log("Типа удалили... ", response);
   dispatcher.dispatch({
      actionType: actionTypes.GOODS_LOAD,
   });
};

const updateGoods = async (fakeGoods) => {
   const response = await fetch(`${apiURL}/yastva/${fakeGoods[0]}`, {
      method: "put",
      headers,
      body: JSON.stringify({
         code: fakeGoods[1],
         name: fakeGoods[2],
         categories: [fakeGoods[3]],
         brand: fakeGoods[4],
         vendor: fakeGoods[5],
         prices: { base: fakeGoods[6] },
         measures: {
            weight: fakeGoods[7],
            volume: fakeGoods[8],
         },
      }),
   });
   if (!response.ok) {
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
      console.log("Абзац...", responseUUID);
   }
   const resultUUID = await responseUUID.json();
   fakeGoods[0] = `goods:${resultUUID.uuids[0]}`;

   updateGoods(fakeGoods);
};

const getGoodsByCode = async (code) => {
   const result = await getFromAPI(
      `/yastva/_partition/goods/_design/goods/_view/goodsByCode?include_docs=true&keys=["${code}"]`
   );

   if (result.rows.length > 0) {
      dispatcher.dispatch({
         actionType: actionTypes.GOODS_FIND_BY_CODE_ARRIVED,
         goods: result.rows[0].doc,
      });
   }
};

export { getGoods, delGoods, updateGoods, addNewGoods, getGoodsByCode };
