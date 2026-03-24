import { all } from "redux-saga/effects";
import { productWatcherSaga } from "./productSaga";

export default function* rootSaga() {
    yield all([productWatcherSaga()]);
}
