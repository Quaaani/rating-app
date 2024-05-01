interface Params {
  slug: string
}

interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface ViewDefaultProps {
  params?: Params
  searchParams?: SearchParams
}
