import { createAction } from 'typesafe-actions';

export const getCartList = createAction("@request/cartList", (data)=>data)();
export const fetchItemList = createAction("@request/itemList", (data)=>data)();
export const fetchCurrentList = createAction("@request/currentList", (data)=>data)();
export const getPageTotal = createAction("@update/page/total", (data)=>data)();
export const changePage = createAction("@update/page/current", (data)=>data)();