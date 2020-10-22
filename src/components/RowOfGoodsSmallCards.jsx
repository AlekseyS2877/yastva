import React from "react";
import GoodsSmallCard from "./GoodsSmallCard";

const RowOfGoodsSmallCards = ({ goodsList }) => {
   return (
      <div className="row align-items-center">
         {goodsList.map((eachGoods) => {
            return (
               <div className="col">
                  <GoodsSmallCard goods={eachGoods} />
               </div>
            );
         })}
      </div>
   );
};

export default RowOfGoodsSmallCards;
