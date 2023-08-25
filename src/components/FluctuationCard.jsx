import React from 'react'
import { useGetFluctuationQuery } from '../redux/api/exchangeApi'

export default function FluctuationCard() {

    const {data} = useGetFluctuationQuery({start_date: "2023-07-01", end_date: "2023-08-01"})
    console.log(data)
  return (
    <div>FluctuationCard</div>
  )
}
