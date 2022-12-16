export enum AMOUNTTYPE {
  income,
  expenses,
  transfer,
}

export enum AccountTypes {
  credit = 2,
  saving = 1,
  investment = 3,
}

export interface Flow {
  id: string
  type: AMOUNTTYPE
  category: Category
  comments: string
  account: Account
  createTime: string
  updateTime: string
  recType: number
  amount: number
}
export interface Account {
  id: string
  name: string
  balanceMoney: number
  type: AccountTypes
  icon: string
}
export interface Category {
  id: string
  name: string
  icon?: string | null
  type: number
  isSystem?: number
  createTime: string
  updateTime: string
}

export enum INPUT_KEY {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  zero = 0,
  dot = '.',
  del = 'delete',
  plus = '+',
  minus = '-',
  confirm = 'onfirm',
  eq = '=',
}
