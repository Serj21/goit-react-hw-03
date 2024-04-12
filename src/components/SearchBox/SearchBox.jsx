import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => (
  <div className={s.searchBox}>
    <h2>Find contacts by name</h2>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by name"
    />
  </div>
);

export default SearchBox;
