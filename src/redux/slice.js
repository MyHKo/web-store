import {createSlice} from '@reduxjs/toolkit'
import {getProducts} from "./thunk.js";

const initialState = {
    productList: [],
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
            state.productList = action.payload
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
        builder.addCase(getProducts.pending, (state) => {
            state.isContentLoading = true
        })
            .addCase(getProducts.fulfilled, (state) => {
                state.contentLoading = false
                state.productList.action.payload.ids
            })
    }
})

export const {setProductList, setProductsInCart, setSearchString} = slice.actions
export default slice.reducer;