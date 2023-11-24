import React from 'react'
import {CategoryCard} from '../components/c.index'
import './css/SelectCategory.scss'

const categories = [
    {category: "Action", bgColor: "#FF5209"}, {category: "Drama", bgColor: "#D7A4FF"}, {category: "Romance", bgColor: "#148A08"},
    {category: "Thriller", bgColor: "#84C2FF"}, {category: "Western", bgColor: "#902500"}, {category: "Horror", bgColor: "#7358FF"},
    {category: "Fantasy", bgColor: "#FF4ADE"}, {category: "Music", bgColor: "#E61E32"}, {category: "Fiction", bgColor: "#6CD061"},
]

function SelectCategory() {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {categories.map((category, index)=> (
            <CategoryCard key={index} category={category.category} bgColor={category.bgColor}/>
        ))}
    </div>
  )
}

export default SelectCategory