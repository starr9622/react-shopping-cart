import { fetchCurrentList } from './../actions/index';
import { initializeState } from './../reducers/index';
import { fork, all, take, race, delay, put, call, select } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";
import * as Api from "../apis/product";
import {IStoreState, ProductType} from "../types";

function* fetchProductList(){
    const { data } = yield call(Api.fetchItemList);
    data.sort((a:ProductType,b:ProductType)=> b.score - a.score);
    yield put(Actions.fetchItemList(data));
    const { pageCount, currentPage }: IStoreState = yield select();
    const pageTotal = Math.ceil(data.length / pageCount);
    yield put(Actions.getPageTotal(pageTotal));
    let current:ProductType[] = [];
    for(let i = 0 ; i < pageCount ; i++){
        current.push(data[(pageCount *(currentPage-1)) + i])
    }
    yield put(Actions.fetchCurrentList(current));
}

function* currentListWorkflow(){
    while (yield take(getType(Actions.changePage))) {
        const { pageCount, currentPage, productList }: IStoreState = yield select();
        let current:ProductType[] = [];
        for(let i = 0 ; i < pageCount ; i++){
            current.push(productList[(pageCount *(currentPage-1)) + i])
        }
        yield put(Actions.fetchCurrentList(current));
    }
}

export default function* () {
    yield fork(fetchProductList);
    yield fork(currentListWorkflow);
}
  