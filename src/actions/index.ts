import { createAction } from 'typesafe-actions';

export const getCartList = createAction("@request/cartList", (data)=>data)();
export const fetchItemList = createAction("@request/itemList", (data)=>data)();
export const fetchCurrentList = createAction("@request/currentList", (data)=>data)();
export const getPageTotal = createAction("@update/page/total", (data)=>data)();
export const changePage = createAction("@update/page/current", (data)=>data)();
export const changeCartItem = createAction("@change/cart/item", (data)=>data)();
export const updateCartItem = createAction("@update/cart/item", (data)=>data)();