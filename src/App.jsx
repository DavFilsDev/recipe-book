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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px'
            }}
          >
            {orderedRecipes.map((r) => {
              const isFavorite = favorites.some(f => f.id === r.id)

              return (
                <label key={r.id} style={{ display: 'flex', gap: '5px' }}>
                  <input
                    type="checkbox"
                    checked={isFavorite}
                    onChange={() => toggleFavorite(r)}
                  />
                  {r.id} - {r.name}
                </label>
              )
            })}
          </div>
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
