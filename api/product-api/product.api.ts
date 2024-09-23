import {BaseApiModel} from '../base.api'
import {API_ROUTES} from '@constants'
import {ProductModel} from '@contracts'

class ProductApiModel extends BaseApiModel {
  public async getProduct(body: string): Promise<ProductModel[]> {
    const res = await super.postApi(API_ROUTES.product.find, body)
    return res.json()
  }
}

export const productApiModel = new ProductApiModel()
