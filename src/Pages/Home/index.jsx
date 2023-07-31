import { useEffect, useRef, useState } from "react";
import Styles from "./Home.module.scss";
import { SearchBar, EmptySearch, List } from "../../Components";
import { filmApi } from "../../Services/axios";
import debounce from "lodash.debounce";

const minLetters = 3;
const itensPerPage = 10;

function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    console.log(films);
  }, [films]);

  useEffect(() => {
    searchFilm(search);
  }, [page]);

  const debouncedSearch = useRef(
    debounce((nextValue) => searchFilm(nextValue), 1000)
  ).current;

  const handleChangeSearch = (event) => {
    const { value: nextValue } = event.target;
    setSearch(nextValue);
    setFilms([]);
    debouncedSearch(nextValue);
  };

  const searchFilm = (nextValue) => {
    if (nextValue === "" || nextValue.length <= minLetters) return;
    filmApi
      .get("", {
        params: {
          s: nextValue,
          page: page,
        },
      })
      .then(({ data }) => {
        if (data.Response === "False") {
          console.log("ERRO");
          return;
        }

        setFilms([...films, data.Search]);
        setTotalResults(Number(data.totalResults));
      });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={Styles.page}>
      <SearchBar value={search} changeValue={handleChangeSearch} />
      <div className={Styles.content}>
        {films == null || films === undefined || films.length === 0 ? (
          <EmptySearch />
        ) : (
          <>
            <List results={films} />
            {totalResults == null || page * itensPerPage > totalResults ? (
              ""
            ) : (
              <button onClick={() => loadMore()}>Show more results</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
