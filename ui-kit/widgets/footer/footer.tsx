import {FC} from 'react'
import {FooterProps} from './footer.types'

import styles from './footer.module.css'
import classNames from 'classnames'
import {UIKit} from '@ui-kit'

export const Footer: FC<FooterProps> = ({className}) => {
  const rootClassNames = classNames(className, styles.root)

  return (
    <footer className={rootClassNames}>
      {/* TODO: Use Correct Date */}
      <UIKit.Texts.Paragraph2 className={styles.text}>
        Rating App © 2020 - 2021 Все права защищены
      </UIKit.Texts.Paragraph2>
      <UIKit.Texts.Paragraph2 className={styles.text}>Пользовательское соглашение</UIKit.Texts.Paragraph2>
      <UIKit.Texts.Paragraph2 className={styles.text}>Политика конфиденциальности</UIKit.Texts.Paragraph2>
    </footer>
  )
}
