import { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm); // Call parent function with search term
  };

  return (
    <form className="flex items-center mx-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className="ml-2 px-3 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
