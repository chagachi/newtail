import Styles from "./Home.module.scss"
import { SearchBar, EmptySearch, List } from "../../Components";

function Home() {
  const teste = [
    {
      name: "Teste 1",
      year: "2023",
      seasons: "2"
    },
    {
      name: "Teste 2",
      year: "2023",
      seasons: "4"
    },
    {
      name: "The Handmaid’s Tale",
      year: "2023",
      seasons: "7"
    },
  ]
  
  return (
    <div className={Styles.page}>
      <SearchBar/>
      <div className={Styles.content}>
        {/* <EmptySearch/> */}
        <List results={teste} />
      </div>
    </div>
  );
}

export default Home;