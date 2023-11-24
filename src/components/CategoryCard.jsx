import React from 'react'
import './css/CategoryCard.scss'

function CategoryCard({
    category="",
    bgColor,
    select=false,
}) {
  return (
    <div className={`category-card ${select && 'selected'}`} style={{backgroundColor: bgColor}}>
        <h3>{category}</h3>
        <img src={`../src/assets/images/${category}.png`} alt={category} />
    </div>
  )
}

export default CategoryCard