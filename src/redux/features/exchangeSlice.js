import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    from: null,
    to: null,
    amount: 1,
}

export const exchangeSlice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        addFromValue: (state, {payload}) => {
            state.from = payload.from
        },
        addToValue: (state, {payload}) => {
            state.to = payload.to
        },
        addAmount: (state, {payload}) => {
            state.amount = payload.amount
        },
    }
})

export const {addFromValue, addToValue, addAmount } = exchangeSlice.actions
export default exchangeSlice.reducer