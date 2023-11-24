import React, { useState } from 'react'
import {CategoryCard} from '../components/c.index'
import './css/SelectCategory.scss'

const categories = [
    {category: "Action", bgColor: "#FF5209"}, {category: "Drama", bgColor: "#D7A4FF"}, {category: "Romance", bgColor: "#148A08"},
    {category: "Thriller", bgColor: "#84C2FF"}, {category: "Western", bgColor: "#902500"}, {category: "Horror", bgColor: "#7358FF"},
    {category: "Fantasy", bgColor: "#FF4ADE"}, {category: "Music", bgColor: "#E61E32"}, {category: "Fiction", bgColor: "#6CD061"},
]

function SelectCategory() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(false);

    const addCategory = (category)=> {
        setSelectedCategories((prev)=> [...prev, category]);
    }

    const removeCategory = (category)=> {
        setSelectedCategories((prev)=> prev.filter((item)=> item!==category));
    }

    const handleSubmitCategory = ()=> {
        if(selectedCategories.length >= 3) {
            localStorage.setItem("categories", selectedCategories);
        } else {
            setError(true);
        }
    }

  return (
      <div className='category-page'>
          <div>
              <div className='logo-text'>
                  <h3>Super app</h3>
                  <p>Choose your entertainment category</p>
              </div>
              <div className="selected-categories">
                {selectedCategories.map((category, index)=> (
                    <div key={index}>
                        {category}
                        <span onClick={()=> removeCategory(category)}>X</span>
                    </div>
                ))}
              </div>
              {(error && selectedCategories.length<3) && 
              <p className='error'><img src="../src/assets/images/error.png" alt="error" width={25} height={20} />&nbsp;&nbsp;Minimum 3 categories required</p>}
          </div>
          <div>
            {categories.map((category) => (
                <CategoryCard key={category.category} category={category.category} bgColor={category.bgColor} 
                    select={selectedCategories.includes(category.category)} handleCategory={{addCategory, removeCategory}}
                />
            ))}
            <button onClick={handleSubmitCategory}>Next Page</button>
          </div>
      </div>
  )
}

export default SelectCategory