import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RowOfGoodsSmallCards from "./RowOfGoodsSmallCards";
import * as goodsActions from "../actions/goodsActions";
import goodsStore from "../stores/goodsStore";

const HomePage = () => {
   const [goodsList, setGoodsList] = useState([]);

   const goodsArrived = (parGoodsList) => setGoodsList(parGoodsList);

   useEffect(() => {
      goodsStore.addListener("change", goodsArrived);

      goodsActions.loadNewGoods(5);

      return () => goodsStore.removeListener("change", goodsArrived);
   }, []);

   return (
      <>
         <div className="jumbotron">
            <h1>Интернет-магазин &quot;Яства&quot;</h1>
            <p>Есть вещи которые нельзя купить. Остальное купите у нас!</p>
            <Link to="about" className="btn btn-primary">
               О нас
            </Link>
         </div>
         <div className="container align-items-center">
            <RowOfGoodsSmallCards goodsList={goodsList} />
         </div>
      </>
   );
};

export default HomePage;
