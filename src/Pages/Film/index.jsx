import Styles from "./Film.module.scss";
import { ReactComponent as BackHome } from "../../Assets/back.svg";
import { ReactComponent as Favorite } from "../../Assets/favorite.svg";
import teste from "../../Assets/teste.png";
import logo from "../../Assets/IMDb.png";
import rating from "../../Assets/rating.png";

function Film() {
  return (
    <div className={Styles.page}>
      <div className={Styles.infos}>
        <div className={Styles.backButton}>
          <BackHome />
        </div>

        <div className={Styles.details}>
          <p>
            51 Min • 2011-2019 • <span>TV-MA</span>
          </p>
        </div>

        <div className={Styles.title}>
          <h1>Game of Thrones</h1>
        </div>

        <div className={Styles.rating}>
          <div className={Styles.imdb}>
            <img src={logo} alt="Logo" />
            <span>6.9/10</span>
          </div>

          <div className={Styles.rate}>
            <img src={rating} alt="Rate" />
            <span>82%</span>
          </div>

          <div className={Styles.favorite}>
            <Favorite />
            <span>Add to favorites</span>
          </div>
        </div>

        <div className={Styles.plot}>
          <h3>Plot</h3>
          <p>
            Nine noble families fight for control over the lands of Westeros,
            while an ancient enemy returns after being dormant for millennia.
          </p>
        </div>

        <div className={Styles.additionalInfos}>
          <div>
            <h3>Cast</h3>
            <span>Emilia Clarke</span>
            <span>Peter Dinklage</span>
            <span>Kit Harington</span>
          </div>

          <div>
            <h3>Genre</h3>
            <span>Action</span>
            <span>Adventure </span>
            <span>Drama</span>
          </div>

          <div>
            <h3>Director</h3>
            <span>N/A</span>
          </div>
        </div>
      </div>

      <div className={Styles.cover}>
        <img src={teste} alt="teste" />
      </div>
    </div>
  );
}

export default Film;
