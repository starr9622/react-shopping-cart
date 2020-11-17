import { ActionType, getType } from 'typesafe-actions';
import * as Actions from '../actions';
import { IStoreState } from '../types';

export const initializeState: IStoreState = {
  productList: [],
  cart: [],
  couponList: [],
  selectCoupon: '',
  currentList: [],
  cartCheckList: [],
  currentPage: 1,
  pageTotal: 1,
  pageCount: 5,
};

export const reducer = (
  state = initializeState,
  action: ActionType<typeof Actions>
) => {
  switch (action.type) {
    case getType(Actions.fetchItemList):
      return {
        ...state,
        productList: action.payload,
      };
    case getType(Actions.fetchCurrentList):
      return {
        ...state,
        currentList: action.payload,
      };
    case getType(Actions.getPageTotal):
      return {
        ...state,
        pageTotal: action.payload,
      };
    case getType(Actions.changePage):
      return {
        ...state,
        currentPage: action.payload,
      };
    case getType(Actions.updateCartItem):
      return {
        ...state,
        cart: action.payload,
      };
    case getType(Actions.fetchCouponList):
      return {
        ...state,
        couponList: action.payload,
      };
    case getType(Actions.updateItemCheck):
      return {
        ...state,
        cartCheckList: action.payload,
      };
    case getType(Actions.selectCoupon):
      return {
        ...state,
        selectCoupon: action.payload,
      };
    default:
      return Object.assign({}, state);
  }
};
