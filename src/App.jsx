import { useState } from 'react'
import recipes from './data/recipes.json'
import styles from './App.module.css'
import RecipeList from './components/RecipeList/RecipeList.jsx'

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes)
  const [favorites, setFavorites] = useState([])

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

  function toggleFavorite(recipe) {
    setFavorites((prev) => {
      const exists = prev.find(r => r.id === recipe.id)

      if (exists) {
        return prev.filter(r => r.id !== recipe.id)
      } else {
        return [...prev, recipe]
      }
    })
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <h3>Favorites:</h3>
          <ul>
            {favorites.map((r) => (
              <li key={r.id}>{r.name}</li>
            ))}
          </ul>
        </div>
        <RecipeList
          recipes={orderedRecipes}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  )
}
