import imageNotFound from "../../../Assets/imageNotFound.png";
import { ReactComponent as Coracao } from "../../../Assets/favorite.svg";
import Styles from "./ListItem.module.scss";
import { coverApi } from "../../../Services/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ListItem(params) {
  const [hasCover, setHasCover] = useState(false);

  useEffect(() => {
    coverApi
      .get("", {
        params: {
          i: params.id,
        },
      })
      .then(() => {
        setHasCover(true);
      })
      .catch(() => {
        setHasCover(false);
      });
  }, [params.id]);

  return (
    <Link to={`/film/${params.id}`}>
      <div className={Styles.item}>
        <img
          src={
            hasCover
              ? `http://img.omdbapi.com/?apikey=1ea0eca3&i=${params.id}`
              : imageNotFound
          }
          alt="teste"
        />
        <div className={Styles.infos}>
          <div className={Styles.icon}>
            <Coracao />
          </div>
          <div>
            <p>{params.name}</p>
            <small>{params.year}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}
