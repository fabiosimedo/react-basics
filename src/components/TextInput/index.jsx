import './style.css';

export function TextInput({ searchValue, handleSearch }) {
  return (
    <input 
      type="search" 
      onChange={handleSearch}
      value={searchValue}
    />
  );
}
