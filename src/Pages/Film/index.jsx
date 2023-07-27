import Styles from "./Film.module.scss";
import { ReactComponent as BackHome } from "../../Assets/back.svg";
import { ReactComponent as Favorite } from "../../Assets/favorite.svg";
import teste from "../../Assets/teste.png";

function Film() {
  return (
    <div className={Styles.page}>
      <div className={Styles.infos}>
        <BackHome />

        <div>
          <p>
            51 Min * 2011-2019 * <spam>TV-MA</spam>
          </p>
        </div>

        <div>
          <h1>Game of Thrones</h1>
        </div>

        <div>
          <div>
            <span>IMDb</span>
            <span>6.9/10</span>
          </div>

          <div>
            <span>IMDb</span>
            <span>82%</span>
          </div>

          <div>
            <Favorite />
            <span>Add to favorites</span>
          </div>
        </div>

        <div>
          <h3>Plot</h3>
          <p>
            Nine noble families fight for control over the lands of Westeros,
            while an ancient enemy returns after being dormant for millennia.
          </p>
        </div>

        <div>
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
