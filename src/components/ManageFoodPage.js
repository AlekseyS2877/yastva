import React, { useState, useEffect } from "react";
import FoodForm from "./FoodForm";
import * as foodApi from "../api/foodApi";
import { toast } from "react-toastify";

const ManageFoodPage = (props) => {
  const [errors, setErrors] = useState({});
  const [food, setFood] = useState({
    id: null,
    token: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const token = props.match.params.token; // from the path `/foods/:token`
    if (token) {
      // getFoodBytoken returns a promise
      foodApi.getFoodBytoken(token).then((_food) => setFood(_food));
    }
  }, [props.match.params.token]); // at the end: dependency array:
  // if something in this array has changed, so re-render.

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
    foodApi.saveFood(food).then(() => {
      props.history.push("/foods");
      toast.success("Food saved.");
    });
  }

  return (
    <>
      <h2>Manage Food</h2>
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
