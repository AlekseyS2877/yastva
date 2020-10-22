import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import goodsStore from "../stores/goodsStore";
import GoodsList from "./GoodsList";
import { loadGoods } from "../actions/goodsActions";

const GoodsPage = () => {
   const [goods, setGoods] = useState([]);

   const onChange = (goods) => setGoods(goods);

   useEffect(() => {
      goodsStore.addListener("change", onChange);

      loadGoods();

      // cleanup on unmount
      return () => goodsStore.removeListener("change", onChange);
   }, []);

   return (
      <>
         <h2>Наши яства</h2>
         <Link className="btn btn-primary" to="/newGoods">
            Добавить
         </Link>
         <GoodsList goods={goods} />
      </>
   );
};

export default GoodsPage;
