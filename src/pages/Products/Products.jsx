import { categories, products } from "../../components/constants/index.js"
import PageHeader from "../../components/shared/PageHeader/PageHeader.jsx"
import Products from "../../components/shared/Products/Products.jsx"
import { useState } from "react"
import FilteringSidebar from "./components/FilteringSidebar"

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    searchValue: '',
    category: 'All',
    price: 200,
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.searchValue.toLowerCase());
    const matchesCategory = filters.category === 'All' || product.category.id === Number(filters.category);
    const matchesPrice = product.price <= filters.price;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <PageHeader title="Products" />
      <section className="container mx-auto px-10 my-10">
        <div className="grid grid-cols-7 gap-8">
          <FilteringSidebar
            handleInputChange={handleInputChange}
            filters={filters}
            categories={categories}
          />
          <div className="col-span-12 lg:col-span-5">
            <Products products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
