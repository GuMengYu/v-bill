import { Flow } from '@/types'
import { request } from '@/utils/fetch'

export function flowList() {
  return request<{
    code:  number,
    data: {
      flows: Flow[]
    }
  }>('/flow/sync')
}