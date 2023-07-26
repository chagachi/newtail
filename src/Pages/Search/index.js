import { useState } from "react";
import Styles from "./Search.module.scss"
import busca from "../../Assets/fe_search.png"


function Search() {
  const [search, setSearch] = useState('')
  
  return (
    <div className={Styles.divContent}>
      <div className={Styles.searchInput}>
        <img src={busca} alt="busca" />
        <input type="text" value={search} placeholder={"Search movies..."} className={Styles.searchInput} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
}

export default Search;