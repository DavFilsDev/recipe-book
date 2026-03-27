import { useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard.jsx'
import styles from './RecipeList.module.css'

export default function RecipeList({ recipes, favorites, toggleFavorite }) {
  const [search, setSearch] = useState('')

  const filteredRecipes = recipes.filter(recipe => {
    const matchSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchSearch
  })

  return (
    <>
      <div
        style={{
          margin: '30px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className={styles.list}>
        {filteredRecipes.map((recipe, index) => (
          <li key={index} className={styles.item}>
            <RecipeCard
              recipe={recipe}
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
            />
          </li>
        ))}
      </ul>
    </>
  )
}