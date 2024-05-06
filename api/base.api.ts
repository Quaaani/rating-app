import {requestConfig} from './constants'

export class BaseApiModel {
  // TODO: Response type
  public async getApi(url: string) {
    return await fetch(url, requestConfig)
  }

  // TODO: Solve body type
  public async postApi(url: string, body: string) {
    return await fetch(url, {
      ...requestConfig,
      method: 'POST',
      body,
    })
  }
}
