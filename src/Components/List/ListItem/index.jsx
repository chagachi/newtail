import teste from "../../../Assets/teste.png"
import {ReactComponent as Coracao} from "../../../Assets/favorite.svg"
import Styles from './ListItem.module.scss'

export function ListItem(params){

  return(
    <div className={Styles.item}>
      <img src={teste} alt="teste" />
      <div className={Styles.infos}>
        <div className={Styles.icon}>
          <Coracao/>
        </div>
        <div>
          <p>{params.name}</p>
          <small>{params.year}</small>
        </div>
      </div>
    </div>
  )
}