export const requestConfig: RequestInit = {
  headers: new Headers({'content-type': 'application/json'}),
  next: {
    revalidate: 10,
  },
}
