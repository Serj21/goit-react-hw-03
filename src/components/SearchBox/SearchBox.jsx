const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search by name"
  />
);

export default SearchBox;
