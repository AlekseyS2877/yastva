import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function FoodForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Название"
        onChange={props.onChange}
        name="title"
        value={props.food.name}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Производитель</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.food.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Barilla</option>
            <option value="2">Iberica</option>
            <option value="3">Heinz</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Категория"
        name="category"
        onChange={props.onChange}
        value={props.food.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

FoodForm.propTypes = {
  food: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FoodForm;
