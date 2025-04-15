import { ShoppingCart } from 'lucide-react';
import React from 'react'
import RatingStars from '#components/ui/RatingStars/RatingStars.jsx';

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product;
  return (
    <div className='bg-gray rounded max-h-[300px] flex flex-col transition-transform duration-700 hover:translate-y-2'>
      <img src={image} className='h-full max-h-[200px] m-auto' alt={name} />
      <div className='p-2 py-5 bg-white border border-gray shadow'>
        <div className="flex justify-between items-center">
          <div>
            <h3 className='text-primary-black font-bold mb-2'>{name}</h3>
            <RatingStars rating={rating} />
            <span className='text-primary-green-dark font-semibold'>${price}</span>
          </div>
          <button><ShoppingCart size={32} className='text-primary-green transition hover:text-primary-green-dark' /></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
