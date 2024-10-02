import {createSlice} from '@reduxjs/toolkit'
import {getProducts} from "./thunk.js";

const initialState = {
    productIdAndNameList: [],
    filteredProducts: [],
    productsInCart: [],
    searchString: "",
}

const slice = createSlice({
    name: 'globalStateSlice',
    initialState,
    reducers: {
        setFilteredProductList: (state, action) => {
            state.filteredProducts = action.payload
        },
        setProductsInCart: (state, action) => {
            state.productsInCart = action.payload
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productIdAndNameList = action.payload.ids
                state.filteredProducts = action.payload.ids
            })
    }
})

export const {setFilteredProductList, setProductsInCart, setSearchString} = slice.actions
export default slice.reducer;