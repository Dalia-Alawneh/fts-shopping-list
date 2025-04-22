import plantBanner from '#assets/plants/plantbanner.png';
import { categories } from '#Components/constants';
import TabBar from '#Components/shared/TabBar';
import { useState } from 'react'
import Products from '../../../../Components/shared/Products/Products.jsx';

const ProductTabsSection = ({ products }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredProducts = products?.filter(
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
          <Products products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}

export default ProductTabsSection
