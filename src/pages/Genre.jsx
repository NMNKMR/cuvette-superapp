import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {CategoryCard} from '../components/c.index'
import './css/Genre.scss'
import { categories } from '../utils/data';

function SelectCategory() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addCategory = (category)=> {
        setSelectedCategories((prev)=> [...prev, category]);
    }

    const removeCategory = (category)=> {
        setSelectedCategories((prev)=> prev.filter((item)=> item!==category));
    }

    const handleSubmitCategory = ()=> {
        if(selectedCategories.length >= 3) {
            localStorage.setItem("categories", JSON.stringify(selectedCategories));
            navigate('/');
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
              <p className='genre-error'><img src="../src/assets/images/error.png" alt="error" width={25} height={20} />&nbsp;&nbsp;Minimum 3 categories required</p>}
          </div>
          <div>
            {categories.map(({category, bgColor, image}) => (
                <CategoryCard key={category} category={category} bgColor={bgColor} image={image}
                    select={selectedCategories.includes(category)} handleCategory={{addCategory, removeCategory}}
                />
            ))}
            <button onClick={handleSubmitCategory}>Next Page</button>
          </div>
      </div>
  )
}

export default SelectCategory