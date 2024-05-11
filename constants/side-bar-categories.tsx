import CoursesIcon from '@assets/icons/courses.svg'
import ServicesIcon from '@assets/icons/services.svg'
import BooksIcon from '@assets/icons/books.svg'
import ProductsIcon from '@assets/icons/products.svg'
import {CategoryLevel} from '@contracts'
import {isNumber, isString} from '@utils'

export const categoryIcons = [
  <CoursesIcon key={CategoryLevel.Courses} />,
  <ServicesIcon key={CategoryLevel.Services} />,
  <BooksIcon key={CategoryLevel.Books} />,
  <ProductsIcon key={CategoryLevel.Products} />,
]

export const categoryLabels = Object.values(CategoryLevel).filter(isString)

export const categoryLevels = Object.values(CategoryLevel).filter(isNumber)
