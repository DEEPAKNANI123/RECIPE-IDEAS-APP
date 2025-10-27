import React from "react";

export default function MealCard({ meal }) {
  return (
    <div className="bg-white rounded shadow p-3 flex flex-col items-center">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold text-center">{meal.strMeal}</h3>
    </div>
  );
}
