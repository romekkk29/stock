import {configureStore} from "@reduxjs/toolkit"
import { stockApi } from "./slice"

export default configureStore({
    reducer:{
        stockApi: stockApi.reducer,

    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(stockApi.middleware);
      },
})