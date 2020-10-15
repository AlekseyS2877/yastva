import React, { useState, useEffect } from "react";
import { getFoods } from "../api/foodApi";
import FoodList from "./FoodList";
import { Link } from "react-router-dom";

function FoodPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then((_foods) => setFoods(_foods));
  }, []);

  return (
    <>
      <h2>Наши яства</h2>
      <Link className="btn btn-primary" to="/food">
        Добавить
      </Link>
      <FoodList foods={foods} />
    </>
  );
}

export default FoodPage;
