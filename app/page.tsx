'use client'

import {UIKit, Widgets} from '@ui-kit'

import styles from './page.module.css'
import {useState} from 'react'

export default function Home() {
  const [rating, setRating] = useState(0)

  return (
    <main>
      <UIKit.Texts.Heading>Home Page</UIKit.Texts.Heading>
      <UIKit.Button>Press me</UIKit.Button>
      <UIKit.Button mode="primary" iconPosition="down">
        Press me
      </UIKit.Button>
      <UIKit.Button mode="ghost" iconPosition="down">
        Press me
      </UIKit.Button>
      <UIKit.Paragraph className={styles.par} mode="large">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но
        здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту
        профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять
        Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу
        так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня
        занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как
        прошедший это – реально помогло в трудоустройстве!
      </UIKit.Paragraph>
      <UIKit.Tag mode="medium" color="ghost" href={'https://app.purpleschool.ru/courses/2/sections/56/lessons/1412'}>
        ghost
      </UIKit.Tag>
      <UIKit.Tag mode="medium" color="gray" href={'https://app.purpleschool.ru/courses/2/sections/56/lessons/1412'}>
        gray
      </UIKit.Tag>
      <UIKit.Tag mode="medium" color="green" href={'https://app.purpleschool.ru/courses/2/sections/56/lessons/1412'}>
        green
      </UIKit.Tag>
      <UIKit.Tag mode="medium" color="red" href={'https://app.purpleschool.ru/courses/2/sections/56/lessons/1412'}>
        red
      </UIKit.Tag>
      <UIKit.Tag mode="medium" color="primary" href={'https://app.purpleschool.ru/courses/2/sections/56/lessons/1412'}>
        primary
      </UIKit.Tag>
      <UIKit.Tag>Default</UIKit.Tag>
      <Widgets.Rating isReadonly rating={rating} setRating={setRating} />
    </main>
  )
}
