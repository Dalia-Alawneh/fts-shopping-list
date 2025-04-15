import React from 'react'
import RatingStars from '../RatingStars/RatingStars.jsx'

const Card = ({image, name, rating, description}) => {
  return (
    <div className="shadow w-full card">
      <img src={image} className='w-full object-cover ' alt="Tips book" />
      <div className="bg-white p-3 flex flex-col gap-2">
        <h3 className='text-base font-bold'>{name}</h3>
        <RatingStars rating={rating} />
        <p>{description}</p>
        <button className='btn-primary-green m-auto mt-2'>Download E-book</button>
      </div>
    </div>
  )
}

export default Card
