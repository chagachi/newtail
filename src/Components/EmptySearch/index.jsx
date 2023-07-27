import NotFound from "../../Assets/notFound.png"
import Styles from "./EmptySearch.module.scss"

export function EmptySearch(){
  return(
    <div className={Styles.content}>
      <img src={NotFound} alt="Empty Search" />
      <h3>Don't know what to search?</h3>
      <p>Here's an offer you can't refuse</p>
    </div>
  )
}