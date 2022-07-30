export enum AMOUNTTYPE {
  income = '收入',
  expenses = '支出',
  transfer = '转移',
}

export interface Stream {
  id: string,
  type: AMOUNTTYPE
  classificationId?: string
  classification?: string
  amount: number
  createtime?: string
  accoutId?: string
  accountText?: string
  updatetime?: string
  remark?: string
  creator?: string
  creatorId?: string
}

export enum INPUTKEY {
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
}