import React, { useState, useEffect } from "react";
import FoodForm from "./FoodForm";
import foodStore from "../stores/foodStore";
import { toast } from "react-toastify";
import * as foodActions from "../actions/foodActions";

const ManageFoodPage = (props) => {
  console.log(props);
  const [errors, setErrors] = useState({});
  const [foods, setFoods] = useState(foodStore.getFoods());
  const [food, setFood] = useState({
    id: null,
    token: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    foodStore.addChangeListener(onChange);
    const token = props.match.params.token; // from the path `/foods/:token`
    if (foods.length === 0) {
      foodActions.loadFoods();
    } else if (token) {
      setFood(foodStore.getFoodByToken(token));
    }
    return () => foodStore.removeChangeListener(onChange);
  }, [foods.length, props.match.params.token]); // at the end: dependency array:
  // if something in this array has changed, so re-render.

  function onChange() {
    setFoods(foodStore.getFoods());
  }

  function handleChange({ target }) {
    setFood({
      ...food,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!food.title) _errors.title = "Title is required";
    if (!food.authorId) _errors.authorId = "Author ID is required";
    if (!food.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    foodActions.saveFood(food).then(() => {
      props.history.push("/foods");
      toast.success("Яство сохранено.");
    });
  }

  return (
    <>
      <h2>Редактировать яство</h2>
      <FoodForm
        errors={errors}
        food={food}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageFoodPage;
