//main.js
import React, { useState } from 'react';
import Data from "../../Assets/Data";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Resources = () => {
  // Initialize the state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(1);
  const navigate=useNavigate();

  // Handle category click events
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };


  // Array of categories for rendering
  const categories = [
    { id: 1, name: 'Research' },
    { id: 2, name: 'Patents' },
    { id: 3, name: 'Innovations' },
  ];

  // Filter data based on the selected category
  const filteredData = Data.filter(item => {
    if (selectedCategory === 1 && item.category === 'Research') return true;
    if (selectedCategory === 2 && item.category === 'Patents') return true;
    if (selectedCategory === 3 && item.category === 'Innovations') return true;
    return false;
  });

  console.log(Data);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay overflow-y-hidden"
        ></label>
        {/* <h1 className='text-center bg-base-200 p-2 border-b-2 border-black'>Select Categories</h1> */}
        <ul className="menu bg-base-200 text-base-content min-h-full overflow-y-hidden w-64 p-4">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`cursor-pointer p-2 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white' // Selected category styles
                  : 'bg-base-200' // Default category styles
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="drawer-content p-4">
        {/* Display filtered data */}
        <h2 className="text-xl font-semibold mb-4">Articles</h2>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="article-item mb-4 p-4 border border-gray-300 rounded" onClick={() => handleArticleClick(item.id)}>
              <div className="text-lg font-bold flex justify-between">{item.title} <span><FaArrowRight/></span></div>
              <p className="text-sm text-gray-600">By {item.author || item.inventor} on {item.publicationDate || item.filingDate}</p>
              <p className="mt-2">{item.summary}</p>
            </div>
          ))
        ) : (
          <p>No articles found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;