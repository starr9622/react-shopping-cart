import {
  fork,
  all,
  take,
  race,
  delay,
  put,
  call,
  select,
} from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import * as Actions from '../actions';
import * as Api from '../apis/product';
import { IStoreState, ProductType } from '../types';

function* fetchProductList() {
  const { data } = yield call(Api.fetchItemList);
  data.sort((a: ProductType, b: ProductType) => b.score - a.score);
  yield put(Actions.fetchItemList(data));
  const { pageCount, currentPage }: IStoreState = yield select();
  const pageTotal = Math.ceil(data.length / pageCount);
  yield put(Actions.getPageTotal(pageTotal));
  let current: ProductType[] = [];
  for (let i = 0; i < pageCount; i++) {
    current.push(data[pageCount * (currentPage - 1) + i]);
  }
  yield put(Actions.fetchCurrentList(current));
}

function* fetchCouponList() {
  const { data } = yield call(Api.fetchCouponList);
  yield put(Actions.fetchCouponList(data));
}

function* currentListWorkflow() {
  while (yield take(getType(Actions.changePage))) {
    const { pageCount, currentPage, productList }: IStoreState = yield select();
    let current: ProductType[] = [];
    for (let i = 0; i < pageCount; i++) {
      current.push(productList[pageCount * (currentPage - 1) + i]);
    }
    yield put(Actions.fetchCurrentList(current));
  }
}

function* cartActionWorkflow() {
  let data: { payload: string };
  while ((data = yield take(getType(Actions.changeCartItem)))) {
    const { cart }: IStoreState = yield select();
    let newCart = [];
    if (cart.some((item) => item === data.payload)) {
      newCart = cart.filter((item) => item !== data.payload);
      yield put(Actions.updateCartItem(newCart));
    } else {
      if (cart.length < 3) {
        newCart = cart.concat([data.payload]);
        yield put(Actions.updateCartItem(newCart));
      } else {
        alert('장바구니에는 최대 3개의 상품을 담을 수 있습니다.');
      }
    }
  }
}

function* deleteCartItemWorkflow() {
  while (yield take(getType(Actions.deleteCartItem))) {
    const { cart, cartCheckList }: IStoreState = yield select();
    yield put(
      Actions.updateCartItem(
        cart.filter((item) => !cartCheckList.some((d) => d === item))
      )
    );
    yield put(Actions.updateItemCheck([]));
  }
}

function* cartCheckItemWorkflow() {
  let data: { payload: string };
  while ((data = yield take(getType(Actions.cartItemCheck)))) {
    const { cartCheckList }: IStoreState = yield select();
    if (cartCheckList.some((item) => item === data.payload)) {
      yield put(
        Actions.updateItemCheck(
          cartCheckList.filter((item) => item !== data.payload)
        )
      );
    } else {
      yield put(Actions.updateItemCheck(cartCheckList.concat([data.payload])));
    }
  }
}

function* cartAllCheckWorkflow() {
  while (yield take(getType(Actions.cartAllCheck))) {
    const { cart, cartCheckList }: IStoreState = yield select();
    if (cart === cartCheckList) {
      yield put(Actions.updateItemCheck([]));
    } else {
      yield put(Actions.updateItemCheck(cart));
    }
  }
}

export default function* () {
  yield fork(fetchProductList);
  yield fork(currentListWorkflow);
  yield fork(cartActionWorkflow);
  yield fork(fetchCouponList);
  yield fork(cartCheckItemWorkflow);
  yield fork(deleteCartItemWorkflow);
  yield fork(cartAllCheckWorkflow);
}
