import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foodStore from "../stores/foodStore";
import FoodList from "./FoodList";
import { loadFoods, deleteFood } from "../actions/foodActions";

function FoodPage() {
  const [foods, setFoods] = useState(foodStore.getFoods());

  useEffect(() => {
    foodStore.addChangeListener(onChange);
    if (foods.length === 0) loadFoods();
    return () => foodStore.removeChangeListener(onChange); // cleanup on unmount
  }, [foods.length]);

  function onChange() {
    setFoods(foodStore.getFoods());
  }

  return (
    <>
      <h2>Наши яства</h2>
      <Link className="btn btn-primary" to="/food">
        Добавить
      </Link>
      <FoodList foods={foods} deleteFood={deleteFood} />
    </>
  );
}

export default FoodPage;
