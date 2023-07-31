import { useEffect } from "react";
import Styles from "./List.module.scss";
import { ListItem } from "./ListItem";

export function List({ results }) {
  useEffect(() => {
    console.log(results);
  }, []);
  return (
    <div className={Styles.content}>
      {results.map((itens) =>
        itens.map((params) => (
          <ListItem
            name={params.Title}
            year={params.Year}
            id={params.imdbID}
            key={params.imdbID}
          />
        ))
      )}
    </div>
  );
}
