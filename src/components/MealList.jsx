import MealCard from "./MealCard";

export default function MealList({ meals, onMealClick }) {
  return (
   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fadeIn">
  {meals.map((m) => (
    <MealCard key={m.idMeal} meal={m} onClick={() => onMealClick(m)} />
  ))}
</div>
  );
}
