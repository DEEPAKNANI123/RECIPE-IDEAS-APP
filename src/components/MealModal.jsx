export default function MealModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    // 🔹 Modal background overlay
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      {/* 🔹 Modal content box */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg overflow-auto max-h-[90vh] relative focus:outline-none animate-fadeIn">
        
        {/* 🔹 Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-1 focus:ring-2 focus:ring-green-500"
        >
          ✖
        </button>

        {/* 🔹 Modal image */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover rounded-t-2xl"
        />

        {/* 🔹 Modal content */}
        <div className="p-4 text-gray-800">
          <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
          <p className="text-sm text-gray-500 mb-3">
            Category: {meal.strCategory} | Area: {meal.strArea}
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">Instructions</h3>
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {meal.strInstructions}
          </p>

          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-green-600 hover:text-green-800 underline"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
