import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import FoodList from "./FoodList";
import { Link } from "react-router-dom";

function FoodPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Наши яства</h2>
      <Link className="btn btn-primary" to="/course">
        Добавить
      </Link>
      <FoodList courses={courses} />
    </>
  );
}

export default FoodPage;
