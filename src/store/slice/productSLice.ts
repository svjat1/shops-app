import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IProduct, IProductsState} from "../../interfaces/interfaces";
import {productService} from "../../services";

const initialState: IProductsState = {
    products: [],
    product: null,
    loading: false,
    isVisible: false
}


const getAll = createAsyncThunk<IProduct[], void>(
    'productSLice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await productService.getAll()
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const getDetail = createAsyncThunk<IProduct, number>(
    'productSLice/getDetail',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await productService.getByID(id)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const addProduct = createAsyncThunk<IProduct, IProduct>(
    'productSLice/addProduct',
    async (newProduct, {rejectWithValue}) => {
        try {
            const {data} = await productService.addProduct(newProduct)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const deleteProduct = createAsyncThunk<number, number>(
    'productSLice/deleteProduct',
    async (id, {rejectWithValue}) => {
        try {
            await productService.delete(id)
            return id;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const productSLice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        openModal: state => {
            state.isVisible = !state.isVisible
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(getDetail.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(product =>
                    product.id !== action.payload)
            })
})

const {reducer: productReducer, actions} = productSLice

const productActions = {
    ...actions,
    getAll,
    getDetail,
    addProduct,
    deleteProduct
}

export {
    productActions,
    productReducer
}