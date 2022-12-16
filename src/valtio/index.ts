import { assetsInfo, getCatList } from '@/api'
import { Account, AMOUNTTYPE, Category } from '@/types'
import { groupBy } from 'lodash-es'
import { proxy } from 'valtio'

const appState = proxy<{
  category: Record<AMOUNTTYPE, Category[]>
  accounts: Account[]
}>({
  category: {
    [AMOUNTTYPE.income]: [],
    [AMOUNTTYPE.expenses]: [],
    [AMOUNTTYPE.transfer]: [],
  },
  accounts: [],
})

export async function syncApp() {
  const { data } = await getCatList()
  const grouped = groupBy(data.cats, 'type')
  appState.category[AMOUNTTYPE.income] = grouped[AMOUNTTYPE.income]
  appState.category[AMOUNTTYPE.expenses] = grouped[AMOUNTTYPE.expenses]
  appState.category[AMOUNTTYPE.transfer] = grouped[AMOUNTTYPE.transfer]

  const { data: assets } = await assetsInfo()
  appState.accounts = assets?.accounts ?? []
  return appState
}

export { appState }
