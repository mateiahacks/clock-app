import React from 'react'

export default function FormComponent({
    formData, onChange, onCheck
}) {

  const { firstName, lastName, age, destination } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(formData)

    fetch('http://localhost:3000/?' + params, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
  }

  return (
    <form className='inputForm' onSubmit={handleSubmit}>
       
        <input 
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={onChange}
        />
        <input 
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={onChange}
        />
        <input 
            type='text'
            placeholder='Age'
            name='age'
            value={age}
            onChange={onChange}
        />
        <br />
        <br />

       
        <label>
        <input 
            type='radio' 
            className='radio-button' 
            name='gender'
            value={'male'} 
            onChange={onChange}/> Male
        </label>
        <br />
        <br />
        <label>
        <input 
            type='radio' 
            className='radio-button'
            name='gender'
            value={'female'}
            onChange={onChange}
        /> Female</label>
        <br />
        <br />
        <label>Select your destination</label>
        <br />
        <select 
        name='destination'
        onChange={onChange} 
        value={destination}>
            <option>-- Please select your destination --</option>
            <option>Thailand</option>
            <option>Japan</option>
            <option>Brazil</option>
        </select>
        <br />
        <br />
        <label>Dietary restrictions: </label>
        <br />
        <div className='restrictions'>
            <input 
                type='checkbox'
                name='nutsFree'
                onChange={onCheck}
            />
            <span> Nuts free</span>
            <br />
            <input 
                type='checkbox'
                name='lactoseFree'
                onChange={onCheck}
            />
            <span> Lactose free</span>
            <br />
            <input 
                type='checkbox'
                name='veganMeal'
                onChange={onCheck}
            />
            <span> Vegan</span>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
