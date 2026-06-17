import React, { useEffect, useState } from "react";
import axios from "axios";

function AddBlog() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/get-categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Add blog
  const handleAdd = async () => {
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("content", content);
      formData.append("category_id", categoryId);
      formData.append("image", image); // 👈 important

      const res = await axios.post(
        "http://localhost:8080/api/add-blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      // reset form
      setTitle("");
      setContent("");
      setCategoryId("");
      setImage(null);
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Blog</h2>

      {/* Category */}
      {categories.map((cat) => (
        <label key={cat.id} className="block mb-2">
          <input
            type="radio"
            name="category"
            value={cat.id}
            onChange={(e) => setCategoryId(e.target.value)}
            className="mr-2"
          />
          {cat.name}
        </label>
      ))}

      {/* Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-3 border rounded-xl mb-6"
      />

      {/* Content */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full p-3 border rounded-xl mb-6"
      />

      {/* Image upload */}
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full mb-6"
      />

      {/* Button */}
      <button
        onClick={handleAdd}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-2xl transition-all active:scale-95 w-full"
      >
        Add Blog
      </button>
    </div>
  );
}

export default AddBlog;