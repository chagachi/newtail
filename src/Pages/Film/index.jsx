import Styles from "./Film.module.scss";
import { ReactComponent as BackHome } from "../../Assets/back.svg";
import { ReactComponent as Favorite } from "../../Assets/favorite.svg";
import logo from "../../Assets/IMDb.png";
import rating from "../../Assets/rating.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { filmApi, coverApi } from "../../Services/axios";
import imageNotFound from "../../Assets/imageNotFound.png";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Film() {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [hasCover, setHasCover] = useState(false);
  const [rottenTomatoes, setRottenTomatoes] = useState("?");

  useEffect(() => {
    console.log(id);
    filmApi
      .get("", {
        params: {
          i: id,
        },
      })
      .then(({ data }) => {
        setResult(data);
        data.Ratings.map((item) =>
          item.Source === "Rotten Tomatoes" ? setRottenTomatoes(item.Value) : ""
        );
      });

    coverApi
      .get("", {
        params: {
          i: id,
        },
      })
      .then(() => {
        setHasCover(true);
      })
      .catch(() => {
        setHasCover(false);
      });
  }, [id]);

  return (
    <div className={Styles.page}>
      <div className={Styles.content}>
        <div className={Styles.infos}>
          <div className={Styles.backButton}>
            <Link to="/">
              <BackHome />
            </Link>
          </div>

          <div className={Styles.details}>
            <p>
              {result.Runtime} • {result.Year} • <span>{result.Rated}</span>
            </p>
          </div>

          <div className={Styles.title}>
            <h1>{result.Title}</h1>
          </div>

          <div className={Styles.rating}>
            <div className={Styles.imdb}>
              <img src={logo} alt="Logo" />
              <span>{result.imdbRating}/10</span>
            </div>

            <div className={Styles.rate}>
              <img src={rating} alt="Rate" />
              <span>{rottenTomatoes}</span>
            </div>

            <div className={Styles.favorite}>
              <Favorite />
              <span>Add to favorites</span>
            </div>
          </div>

          <div className={Styles.plot}>
            <h3>Plot</h3>
            <p>{result.Plot}</p>
          </div>

          <div className={Styles.additionalInfos}>
            <div>
              <h3>Cast</h3>
              {result.Actors != null || undefined
                ? result.Actors.split(",").map((item) => <span>{item}</span>)
                : ""}
            </div>

            <div>
              <h3>Genre</h3>
              {result.Genre != null || undefined
                ? result.Genre.split(",").map((item) => <span>{item}</span>)
                : ""}
            </div>

            <div>
              <h3>Director</h3>
              {result.Director != null || undefined
                ? result.Director.split(",").map((item) => <span>{item}</span>)
                : ""}
            </div>
          </div>
        </div>

        <div className={Styles.cover}>
          <img
            src={
              hasCover
                ? `http://img.omdbapi.com/?apikey=1ea0eca3&i=${id}`
                : imageNotFound
            }
            alt="teste"
          />
        </div>
      </div>
    </div>
  );
}

export default Film;
