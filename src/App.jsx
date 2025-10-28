import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";
import { fetchMealsByIngredient } from "./utils/api";
import MealModal from "./components/MealModal";

export default function App() {
  const [q, setQ] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearch = async () => {
    setError("");
    setMeals([]);
    if (!q.trim()) {
      setError("Please enter an ingredient.");
      return;
    }
    setLoading(true);
    try {
      const results = await fetchMealsByIngredient(q.trim());
      if (!results) setError(`No recipes found for "${q.trim()}"`);
      else setMeals(results);
    } catch (err) {
      console.error(err);
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="bg-green-600 text-white w-full text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">🍳 Recipe Ideas</h1>
        <p className="text-sm opacity-90">
          Find delicious meals by ingredients you already have!
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-5xl px-4 py-6">
        {/* Search Bar */}
        <SearchBar
          value={q}
          onChange={setQ}
          onSubmit={handleSearch}
          loading={loading}
        />

        {/* Favorites Button */}
        <div className="w-full text-center mt-4">
          <button
            onClick={() => {
              const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
              setMeals(saved);
              setError("");
            }}
            className="text-sm text-green-700 hover:text-green-900 underline"
          >
            View Favorites ❤️
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="mt-6 text-gray-500">Loading recipes...</p>
        )}

        {/* Error State */}
        {error && <p className="mt-6 text-red-500">{error}</p>}

        {/* Recipe Results */}
        {!loading && !error && meals.length > 0 && (
          <>
            <MealList meals={meals} onMealClick={setSelectedMeal} />

            {/* Scroll to Top Button */}
            <div className="flex justify-center my-8">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition"
              >
                ↑ Back to top
              </button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && !error && meals.length === 0 && (
          <p className="mt-6 text-gray-400">
            Start by typing an ingredient above 👆
          </p>
        )}
      </main>

      {/* Modal */}
      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}
