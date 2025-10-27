export const fetchMealsByIngredient = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response not ok");
  const data = await res.json();
  // data.meals may be null if none found
  return data.meals;
};
