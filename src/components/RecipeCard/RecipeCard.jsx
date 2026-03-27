import { useState } from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeCard({ recipe, favorites, toggleFavorite }) {
  const [pinned, setPinned] = useState(false)
  const isFavorite = favorites.some(r => r.id === recipe.id)
  const [showDetail, setShowDetail] = useState(false)

  return (
    <article 
      className={`${styles.card} ${pinned ? styles.pinned : ''}`}
      onClick={() => setShowDetail(true)}
      style={{ cursor: 'pointer' }}
    >
      <img
        className={styles.image}
        src={recipe.image}
        alt=""
      />
      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <span className={styles.badge}>{recipe.category}</span>
        <p className={styles.duration}>{recipe.duration} min</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className={styles.pin}
            onClick={(e) => {
              e.stopPropagation()
              setPinned((p) => !p)
            }}
          >
            {pinned ? 'Unpin' : 'Pin'}
          </button>

          <button
            type="button"
            onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(recipe)
              }}
            style={{
              backgroundColor: isFavorite ? 'blue' : 'white',
              color: isFavorite ? 'white' : 'black',
              padding: '4px 8px',
              fontSize: '0.8rem',
              fontWeight: '600',
              lineHeight: '1',
              border: '1px solid #ccc',
              marginTop: '0.35rem',
              borderRadius: '6px',
              font: 'inherit',
              cursor: 'pointer'
            }}
          >
            Favorite
          </button>
        </div>
      </div>
    </article>
  )
}
