import {UIKit} from '@ui-kit'

export default function Home() {
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
    </main>
  )
}
