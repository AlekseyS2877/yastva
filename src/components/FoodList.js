import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FoodList(props) {
   console.log(props);
   return (
      <table className="table">
         <thead>
            <tr>
               <th>&nbsp;</th>
               <th>Название</th>
               <th>ID</th>
               <th>Категория</th>
            </tr>
         </thead>
         <tbody>
            {props.foods.map((food) => {
               return (
                  <tr key={food._id}>
                     <td>
                        <button
                           className="btn btn-outline-danger"
                           onClick={() => {
                              props.deleteFood(food._id);
                           }}
                        >
                           Удалить
                        </button>
                     </td>
                     <td>
                        <Link to={"/food/" + food.code}>{food.name}</Link>
                     </td>
                     <td>{food.brand}</td>
                     <td>{food.categories}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}

FoodList.propTypes = {
   deleteFood: PropTypes.func.isRequired,
   foods: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         brand: PropTypes.array.isRequired,
         categories: PropTypes.array.isRequired,
      })
   ).isRequired,
};

export default FoodList;
