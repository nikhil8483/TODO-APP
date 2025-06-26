import './SearchContact.css';

const SearchContact = ({ setToggle, setSearchQuery }) => {
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-contact">
      <input
        type="text"
        placeholder="Search Contact..."
        className="search-input"
        onChange={handleSearch}
      />
      <div className="add-icon" onClick={handleClick}>
        <span className="add-icon-text">+</span>
      </div>
    </div>
  );
};

export default SearchContact;
