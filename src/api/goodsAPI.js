import { apiURL, headers, getFromAPI } from "./helpers";

const getGoodsByCategory = async (callbackFunction) => {
   const result = await getFromAPI(
      "/_partition/goods/_design/goods/_view/goodsByCategory?include_docs=true"
   );
   const newResult = result.rows.map((eachResult) => eachResult.doc);
   return newResult;
};

const delGoods = async (goodsID) => {
   const responseHead = await fetch(`${apiURL}/${goodsID}`, {
      method: "head",
      headers,
   });

   if (!responseHead.ok) {
      console.log("Абзац...", responseHead);
      return;
   }

   const response = await fetch(
      `${apiURL}/${goodsID}?rev=${responseHead.headers.get("ETag").slice(1, -1)}`,
      {
         method: "delete",
         headers,
      }
   );

   console.log("Типа удалили... ", response);
};

const addNewGoods = async (goods) => {
   if (goods.id === undefined) {
      const response = await fetch(apiURL, {
         method: "post",
         headers,
         body: JSON.stringify({
            name: goods.title,
            categories: [goods.category],
         }),
      });
      if (!response.ok) {
         console.log("Абзац...", response);
      }
      const result = await response.json();
      const newGoods = await getFromAPI(result.id);
      return newGoods.json();
   }
};

export { getGoodsByCategory, delGoods, addNewGoods };
