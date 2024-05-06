import {FC} from 'react'
import {MainViewProps} from './main-view.types'

import styles from './main-view.module.css'
import {topPageApiModel} from '@api'

export const MainView: FC<MainViewProps> = async () => {
  const body = {
    firstCategory: 0,
  }
  const data = await topPageApiModel.getMenu(JSON.stringify(body))

  return (
    <div className={styles.root}>
      <ul>
        {data.map(item => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  )
}
