import {MenuItem, TopPageModel} from '@interfaces'
import {API_ROUTES} from './constants'
import {BaseApiModel} from './base.api'

class TopPageApiModel extends BaseApiModel {
  // TODO: Add Error handling
  public async getMenu(body: string): Promise<MenuItem[]> {
    const res = await super.postApi(API_ROUTES.topPage.find, body)
    return res.json()
  }

  // TODO: Add Error handling
  public async getPageByAlias(alias: string): Promise<TopPageModel | null> {
    const res = await super.getApi(API_ROUTES.topPage.byAlias + alias)

    if (!res.ok) {
      return null
    }

    return res.json()
  }
}

export const topPageApiModel = new TopPageApiModel()
