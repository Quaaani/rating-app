export enum topPageAPIRoute {
  FIND = '/api/top-page/find',
  BY_ALIAS = '/api/top-page/byAlias/',
}

export enum productAPIRoute {
  FIND = '/api/product/find',
}

export enum reviewAPIRoute {
  CREATE_DEMO = '/api/review/create-demo',
}

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN

export const API_ROUTES = {
  topPage: {
    find: baseUrl + topPageAPIRoute.FIND,
    byAlias: baseUrl + topPageAPIRoute.BY_ALIAS,
  },
  product: {
    find: baseUrl + productAPIRoute.FIND,
  },
  review: {
    createDemo: baseUrl + reviewAPIRoute.CREATE_DEMO,
  },
}
