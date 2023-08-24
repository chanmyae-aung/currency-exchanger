import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    from: "USD",
    to: "MMK",
    amount: 0,
    fullName: "United States Dollor",
    toFullName: "Myanmar Kyat",
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
        addFullName: (state, {payload}) => {
            state.fullName = payload.fullName
        },
        addToFullName: (state, {payload}) => {
            state.toFullName = payload.toFullName
        },

    }
})

export const {addFromValue, addToValue, addAmount, addFullName, addToFullName} = exchangeSlice.actions
export default exchangeSlice.reducer