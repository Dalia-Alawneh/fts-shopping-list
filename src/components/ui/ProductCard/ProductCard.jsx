import { ShoppingCart } from 'lucide-react';
import React from 'react'

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product;
  return (
    <div className='shadow bg-gray rounded max-h-[300px] border border-gray'>
      <img src={image} className='h-full m-auto' alt={name} />
      <div className='p-2 py-5 bg-white border border-gray'>
        <div className="flex justify-between items-center">
          <div>
            <h3 className='text-primary-black font-bold mb-2'>{name}</h3>
            <span>${price}</span>
          </div>
          <button><ShoppingCart size={32} className='text-primary-black' /></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
