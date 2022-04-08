export type CreateData = {
  time: string
  amount?: number | undefined
}

export type CopyrightSx = {
  pt: number
}

export type PropsSx = {
  sx: CopyrightSx
}

export type OrdersCreateData = {
  id: number
  date: string
  name: string
  shipTo: string
  paymentMethod: string
  amount: number
}
