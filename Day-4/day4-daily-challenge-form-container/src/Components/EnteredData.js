import React from 'react'

export default function EnteredData({ formData }) {
  
  const { firstName, lastName, gender, age, destination, nutsFree, lactoseFree, veganMeal } = formData;

  return (
    <div className='entered-info'>
        <h2>Entered information:</h2>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>Your dietary restrictions:</p>
        <div className='entered-restrictions'>
            <p>**Nuts free: {nutsFree ? "Yes" : "No"}</p>
            <p>**Lactose free: {lactoseFree ? "Yes" : "No"}</p>
            <p>**Vegan meal: {veganMeal ? "Yes" : "No"}</p>
        </div>
    </div>
  )
}
