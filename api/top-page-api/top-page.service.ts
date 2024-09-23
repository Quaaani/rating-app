import {categoryLevels} from '@constants'
import {GetMenuParamsRequest} from '@contracts'
import {topPageApiModel} from './top-page.api'
import {transformMenuToSideBarMenuItems} from '@utils'
import {SideBarItem} from '@interfaces'

class TopPageApiService {
  public async getAllMenus(): Promise<SideBarItem[]> {
    const menuPromises = categoryLevels.map(categoryLevel => {
      const requestParams: GetMenuParamsRequest = {
        firstCategory: categoryLevel,
      }

      return topPageApiModel.getMenu(JSON.stringify(requestParams))
    })

    const menuResults = await Promise.all(menuPromises)

    return transformMenuToSideBarMenuItems(menuResults)
  }
}

export const topPageApiService = new TopPageApiService()
