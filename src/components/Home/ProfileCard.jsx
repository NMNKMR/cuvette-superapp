import React from 'react'
import AvatarImage from '../../assets/images/avatar.png'
import '../css/ProfileCard.scss'

export default function ProfileCard() {
    const userData = JSON.parse(localStorage.getItem("user"))
    const categories = JSON.parse(localStorage.getItem("categories"));

  return (
    <div className='profile-card'>
        <img src={AvatarImage} alt="avatar" />
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
