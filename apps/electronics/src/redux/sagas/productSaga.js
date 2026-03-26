import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../services/productService";
import {
    FETCH_PRODUCTS_REQUEST,
    fetchProductsSuccess,
    fetchProductsFailure,
} from "../actions/productActions";

function* fetchProductsSaga() {
    try {
        const products = yield call(getProducts);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* productWatcherSaga() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
