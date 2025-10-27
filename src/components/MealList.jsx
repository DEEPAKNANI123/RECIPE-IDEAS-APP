import React from "react";
import MealCard from "./MealCard";

export default function MealList({ meals }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {meals.map((m) => (
        <MealCard key={m.idMeal} meal={m} />
      ))}
    </div>
  );
}
