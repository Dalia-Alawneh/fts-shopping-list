import ProductCard from "../ProductCard/ProductCard.jsx"

const Products = ({ products }) => {
  return (
    <div className="order-1 col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
      {products?.length > 0 ? products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )) :
        <div className="text-gray-500">
          No data found
        </div>
      }
    </div>
  )
}

export default Products
