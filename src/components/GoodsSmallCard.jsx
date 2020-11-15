import React from "react";

const GoodsSmallCard = ({ goods }) => {
   return (
      <div className="card">
         <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Cooked_snails.JPG/1200px-Cooked_snails.JPG" alt="test" />
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
