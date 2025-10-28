export default function MealCard({ meal, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      {/* Recipe Image */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      {/* Meal Name */}
      <div className="p-3 text-center">
        <h3 className="text-md font-semibold text-gray-800 truncate">
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
}
