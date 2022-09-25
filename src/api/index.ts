import { Account, Category, Flow } from '@/types'
import { request } from '@/utils/fetch'

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