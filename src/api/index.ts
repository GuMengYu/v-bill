import { Account, Category, Flow } from '@/types'
import { request, requestPost } from '@/utils/fetch'

interface flowModel {
  catId: Category["id"],
  amount: number,
  recType: number,
  accountId: Account['id'],
  comment?: string
}
export function createFlow(data: flowModel) {
  return requestPost<{
    code:  number,
  }>('/flows', data)
}
export function flowList() {
  return request<{
    code:  number,
    data: {
      flows: Flow[]
    }
  }>('/flows')
}

export function assetsInfo() {
  return request<{
    code: number
    data: {
      accounts: Account[]
      accountsSummary: {
        assets: number
        netAssets: number
        liabilities: number
      }
    }
  }>('/accounts')
}

export function getCatList() {
  return request<{
    code:  number,
    data: {
      cats: Category[]
    }
  }>('/cats')
}