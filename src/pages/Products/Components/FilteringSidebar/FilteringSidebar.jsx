import Input from "#Components/ui/Input"

const FilteringSidebar = ({filters, handleInputChange, categories}) => {
  return (
    <aside className="col-span-12 lg:col-span-2 bg-white p-4 rounded shadow">
    <h3 className="text-xl font-semibold mb-4">Filter Products</h3>
    <div className="mb-6">
      <label className="block font-medium mb-1">Search</label>
      <Input
        type="search"
        name="searchValue"
        value={filters.searchValue}
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-6">
      <label className="block font-medium mb-1">Category</label>
      <select
        name="category"
        value={filters.category}
        className="w-full border border-gray-300 rounded p-2"
        onChange={handleInputChange}
      >
        <option value="All">All</option>
        {
          categories?.map(category =>
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          )
        }
      </select>
    </div>

    <div className="mb-6">
      <label className="font-medium mb-1 flex justify-between">
        <span>Price Range</span> <span className="font-bold text-primary-green">${filters.price}</span>
      </label>
      <input
        type="range"
        min="0"
        max="500"
        name="price"
        value={filters.price}
        onChange={handleInputChange}
        className="w-full"
      />
    </div>
  </aside>
  )
}

export default FilteringSidebar
