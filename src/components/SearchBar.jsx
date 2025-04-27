import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search images..."
        className="border border-gray-300 rounded-l-md p-2 w-1/2 focus:outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}
