import s from "./SearchBox.module.css";

const SearchBox = ({ value, setFilter }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
