import React, {useEffect, useState} from 'react'
import '../css/ProfileCard.scss'

export default function ProfileCard() {
    const [userData, setUserData] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        setUserData(JSON.parse(localStorage.getItem("user")))
        setCategories(JSON.parse(localStorage.getItem("categories")))
    }, [])
  return (
    <div className='profile-card'>
        <img src="../../src/assets/images/avatar.png" alt="avatar" />
        <div className='profile-info'>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.username}</p>
            <div className="categories">
                {categories.map((category)=> (
                    <div key={category}>{category}</div>
                ))}
            </div>
        </div>
    </div>
  )
}
