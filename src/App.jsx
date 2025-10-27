import React, { useState } from "react";
import { fetchMealsByIngredient } from "./utils/api";
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";

export default function App() {
  const [q, setQ] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-3xl mx-auto text-center mb-6">
        <h1 className="text-2xl font-bold">Recipe Ideas</h1>
        <p className="text-sm text-gray-600 mt-1">
          Search recipes by ingredient
        </p>
      </header>

      <SearchBar
        value={q}
        onChange={setQ}
        onSubmit={handleSearch}
        loading={loading}
      />

      <main className="max-w-3xl mx-auto mt-6">
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {loading && <div className="mb-4">Loading...</div>}
        {!loading && meals?.length > 0 && <MealList meals={meals} />}
      </main>
    </div>
  );
}
