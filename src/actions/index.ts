import { createAction } from 'typesafe-actions';

export const getCartList = createAction("@request/cartList", (data)=>data)();