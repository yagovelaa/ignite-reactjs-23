import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const respose = await api.get<GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )
  return respose.data
}
