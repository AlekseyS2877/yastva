import React from "react";

const GoodsSmallCard = ({ goods }) => {
   return (
      <div className="card">
         <img className="card-img-top" src="..." alt="test" />
         <div className="card-body">
            <h5 className="card-title">{goods.name}</h5>
            <p className="card-text">{`Арт.${goods.code} Бренд: ${goods.brand}`}</p>
            <a href="#" className="btn btn-primary">
               В корзину
            </a>
         </div>
      </div>
   );
};

export default GoodsSmallCard;
