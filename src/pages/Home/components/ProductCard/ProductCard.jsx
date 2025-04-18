import { ShoppingCart } from 'lucide-react';
import React, { useContext } from 'react'
import RatingStars from '#components/ui/RatingStars/RatingStars.jsx';
import { CartContext } from '../../../../Context/CartContext.jsx';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product;
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success("Product added successfully");
  }
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
          <button onClick={handleAddToCart}><ShoppingCart size={32} className='text-primary-green transition hover:text-primary-green-dark' /></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
