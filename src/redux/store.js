import reducer from "./slice.js";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        globalStateSlice: reducer
    }
})

export default store