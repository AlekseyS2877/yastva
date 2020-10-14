import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Интернет-магазин "Яства"</h1>
      <p>Есть вещи которые нельзя купить. Остальное купите у нас!</p>
      <Link to="about" className="btn btn-primary">
        О нас
      </Link>
    </div>
  );
}

export default HomePage;
