import { configureStore } from "@reduxjs/toolkit";
import { user, stock, cart } from './store/userSlice'


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})