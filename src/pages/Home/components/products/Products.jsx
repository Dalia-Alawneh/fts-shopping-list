import React, { useState } from 'react'
import TabBar from '#Components/shared/TabBar'
import { products, categories } from '#Components/constants';
import plantBanner from '#assets/plants/plantbanner.png';
import ProductCard from '../ProductCard';

const Products = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredProducts = products.filter(
    (item) => item.category.id === activeTab.id
  );
  return (
    <div className='container mx-auto py-12 px-6 lg:px-0'>
      <div className="w-full">
        <TabBar
          tabs={categories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="grid grid-cols-4 gap-10">
          <div className='col-span-4 lg:col-span-1 order-2 lg:order-1'>
            <img className='w-full' src={plantBanner} alt="Plant Banner" />
          </div>
          <div className="order-1 col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-6 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
