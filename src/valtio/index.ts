import { getCatList } from '@/api'
import { proxy } from 'valtio'

const appState = proxy({
  cats: [{ name: 'hello' }],
})


export async function syncCats() {
  const { data } = await getCatList()
  const catlist = data?.cats ?? []
  appState.cats = catlist
}
export {
  appState
} 