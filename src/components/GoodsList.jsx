import React from "react";
import { Link } from "react-router-dom";
import { deleteGoods } from "../actions/goodsActions";

const GoodsList = ({ goods }) => {
   return (
      <table className="table">
         <thead>
            <tr>
               <th>&nbsp;</th>
               <th>Артикул</th>
               <th>Название</th>
               <th>URL</th>
               <th>Категория</th>
               <th>Бренд</th>
               <th>Поставщик</th>
               <th>Вес/Объем</th>
               <th>Базовая цена</th>
            </tr>
         </thead>
         <tbody>
            {goods.map((eachGoods) => {
               return (
                  <tr key={eachGoods._id}>
                     <td>
                        <button
                           className="btn btn-outline-danger"
                           onClick={() => {
                              deleteGoods(eachGoods._id);
                           }}
                        >
                           Удалить
                        </button>
                     </td>
                     <td>{eachGoods.code}</td>
                     <td>
                        <Link to={`/goods/${eachGoods.url}`}>{eachGoods.name}</Link>
                     </td>
                     <td>{eachGoods.url}</td>
                     <td>{eachGoods.categories}</td>
                     <td>{eachGoods.brand}</td>
                     <td>{eachGoods.vendor}</td>
                     <td>{`${eachGoods.measures.weight}/${eachGoods.measures.volume}`}</td>
                     <td>{eachGoods.prices.base}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default GoodsList;
