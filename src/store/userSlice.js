import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name: "user",
    initialState: { name : 'kim', age : 20 },
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increaseAge(state, a) {
            state.age += a.payload
        }
    }
})

export let { changeName, increaseAge } = user.actions;

let stock = createSlice({
    name : 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: "cart",
    initialState: [{
        id: 0,
        name: "White and Black",
        count: 2
    },

        {
            id : 2,
            name : "Grey Yordan",
            count : 1
        },
    ],
    reducers : {
        increaseCount(state, action) {
            let id = state.findIndex((item) => { return item.id === action.payload })
            state[id].count += 1;
        },
        addItem(state, action) {
            state.push(action.payload);
        }
    }
})

export let { increaseCount, addItem } = cart.actions;


export { user, stock, cart };
