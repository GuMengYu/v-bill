import { Account, Flow } from '@/types'
import { request } from '@/utils/fetch'

export function flowList() {
  return request<{
    code:  number,
    data: {
      flows: Flow[]
    }
  }>('/flow/sync')
}

export function assetsInfo() {
  return request<{
    code: number
    data: {
      accountList: Account[]
      accountSummary: {
        assets: number
        netAssets: number
        liabilities: number
      }
    }
  }>('/accounts/info')
}