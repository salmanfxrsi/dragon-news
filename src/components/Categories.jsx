import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F]">
        All Category : {categories.length}
      </h1>
      <div className="flex flex-col gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-semibold text-[#403F3F] bg-[#E7E7E7]"
                  : "font-medium text-[#9F9F9F]"
              } text-xl rounded-md  py-5 px-6`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
