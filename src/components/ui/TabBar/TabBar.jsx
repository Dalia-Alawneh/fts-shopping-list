import { useState } from 'react';
import { categories, products } from './../../constants/index.js';
import TabBarItem from './../TabItem/TabItem.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import plantBanner from '#assets/plants/plantbanner.png';
export default function TabBar() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredProducts = products.filter(
    (product) => product.category.id === activeTab.id
  );

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        {categories.map((tab) => (
          <TabBarItem
            key={tab.id}
            title={tab.name}
            isActive={activeTab.id === tab.id}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className='col-span-12 lg:col-span-4 order-2 lg:order-1'>
          <img className='w-full' src={plantBanner} alt="Plant Banner" />
        </div>
        <div className="order-1 col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
