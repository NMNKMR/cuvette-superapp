import React from 'react'
import './css/CategoryCard.scss'

function CategoryCard({
    category="",
    bgColor,
    image,
    select=false,
    handleCategory: {addCategory, removeCategory},
}) {

    const toggleCategory = ()=> {
        select ? removeCategory(category) : addCategory(category);
    }
  return (
    <div className={`category-card ${select && 'selected'}`} style={{backgroundColor: bgColor}} onClick={toggleCategory}>
        <h3>{category}</h3>
        <img src={image} alt={category} />
    </div>
  )
}

export default CategoryCard