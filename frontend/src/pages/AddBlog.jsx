import React, { useEffect, useState } from "react";
import axios from "axios";

function AddBlog() {
  const [categories, setCategories] = useState([]);

  // 🔥 Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/get-categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Blog</h2>

      {/* Category Dropdown */}
      <label className="block mb-2 font-medium">Select Category</label>
      <select className="w-full p-3 border rounded-xl mb-6">
        <option value="">-- Choose Category --</option>

        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddBlog;