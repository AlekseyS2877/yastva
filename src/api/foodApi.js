import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/foods/";

export function getFoods() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getFoodBytoken(token) {
  return fetch(baseUrl + "?token=" + token)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((foods) => {
        if (foods.length !== 1) throw new Error("Food not found: " + token);
        return foods[0]; // should only find one food for a given token, so return it.
      });
    })
    .catch(handleError);
}

export function saveFood(food) {
  return fetch(baseUrl + (food.id || ""), {
    method: food.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...food,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(food.authorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteFood(foodId) {
  return fetch(baseUrl + foodId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
