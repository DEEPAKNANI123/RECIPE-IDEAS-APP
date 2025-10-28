import React from "react";

export default function MealList({ meals, onMealClick }) {
  // Add to favourites
  const addToFavourites = (meal) => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    // Check if already in favourites
    const exists = saved.some((item) => item.idMeal === meal.idMeal);
    let updated;
    if (exists) {
      updated = saved.filter((item) => item.idMeal !== meal.idMeal);
    } else {
      updated = [...saved, meal];
    }
    localStorage.setItem("favorites", JSON.stringify(updated));
    alert(
      exists
        ? `${meal.strMeal} removed from favourites 💔`
        : `${meal.strMeal} added to favourites ❤️`
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
      {meals.map((meal) => {
        const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
        const isFav = saved.some((item) => item.idMeal === meal.idMeal);

        return (
          <div
            key={meal.idMeal}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-lg w-full h-48 object-cover cursor-pointer"
              onClick={() => onMealClick(meal)}
            />
            <h3 className="mt-3 text-lg font-semibold text-gray-800 text-center">
              {meal.strMeal}
            </h3>

            {/* Add to Favourite Button */}
            <button
              onClick={() => addToFavourites(meal)}
              className={`mt-3 px-4 py-2 rounded-full text-sm font-medium ${
                isFav
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-green-100 text-green-600 hover:bg-green-200"
              }`}
            >
              {isFav ? "❤️ Remove Favourite" : "🤍 Add to Favourite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
