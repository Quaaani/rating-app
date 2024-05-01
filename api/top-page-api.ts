import {MenuItem, TopPageModel} from '@interfaces'
import {API_ROUTES, requestConfig} from './constants'

class TopPageApiModel {
  // TODO: Solve body type
  // TODO: Response type
  private async getApi(url: string) {
    return await fetch(url, requestConfig)
  }

  private async postApi(url: string, body: string) {
    return await fetch(url, {
      ...requestConfig,
      method: 'POST',
      body,
    })
  }

  // TODO: Add Error handling
  public async getMenu(body: string): Promise<MenuItem[]> {
    const res = await this.postApi(API_ROUTES.topPage.find, body)
    return res.json()
  }

  // TODO: Add Error handling
  public async getPageByAlias(alias: string): Promise<TopPageModel | null> {
    const res = await this.getApi(API_ROUTES.topPage.byAlias + alias)

    if (!res.ok) {
      return null
    }

    return res.json()
  }
}

export const topPageApiModel = new TopPageApiModel()
