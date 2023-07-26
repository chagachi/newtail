import Styles from "./Home.module.scss"
import { SearchBar, EmptySearch } from "../../Components";

function Home() {
  
  return (
    <div className={Styles.page}>
      <SearchBar/>
      <div className={Styles.content}>
        <EmptySearch/>
      </div>
    </div>
  );
}

export default Home;