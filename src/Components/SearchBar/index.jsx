import Styles from "./SearchBar.module.scss";
import busca from "../../Assets/fe_search.png";

export function SearchBar({ value, changeValue }) {
  return (
    <div className={Styles.divContent}>
      <div className={Styles.searchInput}>
        <img src={busca} alt="busca" />
        <input
          type="text"
          value={value}
          placeholder={"Search movies..."}
          className={Styles.searchInput}
          onChange={(e) => changeValue(e)}
        />
      </div>
    </div>
  );
}
