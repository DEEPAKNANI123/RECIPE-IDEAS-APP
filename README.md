# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🧑‍🍳 **Recipe Ideas — TheMealDB App**

## 📝 **Overview**

**Recipe Ideas** is a simple, responsive web app that helps users find delicious meal ideas using ingredients they already have at home.  
Built using **React + Tailwind CSS**, powered by the **[TheMealDB API](https://www.themealdb.com/)**.

👩‍💼 *Example user story:*  
> Taylor is a busy professional who often wonders, “What can I cook with the ingredients in my fridge?”  
> This app helps her quickly discover meal recipes based on a single ingredient — like “chicken,” “tomato,” or “rice.”

---

## 🚀 **Features**

- 🔍 **Search by Ingredient** — instantly fetch recipes from TheMealDB API.  
- ❤️ **Save Favorites** — mark recipes you love and revisit them anytime.  
- 🍽️ **Recipe Modal** — view meal details with category, area, and instructions.  
- 📱 **Responsive Design** — looks great on both desktop and mobile devices.  
- ♿ **Accessible UI** — keyboard navigation + ARIA labels.  
- ⚡ **Smooth Animations** — subtle fade-ins for a polished experience.

---

## 🧩 **Tech Stack**

| Frontend | Styling | API | Build Tool |
|-----------|----------|-----|-------------|
| React 18  | Tailwind CSS | TheMealDB API | Vite |

---

## 🧠 **How It Works**

1. User enters an ingredient name in the search bar.  
2. App calls **TheMealDB API** to fetch matching meals.  
3. Results display in a responsive grid layout.  
4. Clicking a card opens a modal with recipe details.  
5. Users can “Add to Favorites” and later click **View Favorites ❤️** to reload them.

---

## 🧪 **Testing Checklist**

✅ Ingredient search works correctly  
✅ Responsive grid (1–4 columns depending on screen size)  
✅ Modal opens/closes smoothly  
✅ Favorites persist after refresh  
✅ Works on both desktop & mobile  

---

## 🖼️ **Screenshots**

*(Add your own screenshots here later)*  
Example sections:  
- **Home Page**  
- **Modal View**  
- **Favorites List**

---

## ⚙️ **Setup & Run Locally**

```bash
# Clone repository
git clone https://github.com/yourusername/recipe-ideas.git
cd recipe-ideas

# Install dependencies
npm install

# Start development server
npm run dev
