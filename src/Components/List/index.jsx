import Styles from './List.module.scss'
import {ListItem} from './ListItem'

export function List({results}){

  return(
    <div className={Styles.content}>
      {
        results.map((params) => (
          <ListItem name={params.name} year={params.year} seasons={params.seasons} />
        ))
      }
    </div>
  )
}