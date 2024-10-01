import {createSlice} from '@reduxjs/toolkit'
import {getProducts} from "./thunk.js";

const initialState = {
    productIdAndNameList: [],
    productsInCart: [],
    searchString: "",
    isSearchFieldBlocked: false,
    isContentLoading: false
}

const slice = createSlice({
    name: 'globalStateSlice',
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productIdAndNameList = action.payload
        },
        setProductsInCart: (state, action) => {
            state.productsInCart = action.payload
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload
        },
        setIsSearchFieldBlocked: (state, action) => {
            state.isSearchFieldBlocked = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
            state.isContentLoading = true
        })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isContentLoading = false
                state.productIdAndNameList = action.payload.ids
            })
    }
})

export const {setProductList, setProductsInCart, setSearchString} = slice.actions
export default slice.reducer;