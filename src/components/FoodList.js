import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FoodList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Название</th>
          <th>ID</th>
          <th>Категория</th>
        </tr>
      </thead>
      <tbody>
        {props.foods.map((food) => {
          return (
            <tr key={food.id}>
              <td>
                <Link to={"/food/" + food.token}>{food.title}</Link>
              </td>
              <td>{food.authorId}</td>
              <td>{food.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

FoodList.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FoodList;
