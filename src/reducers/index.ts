import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";
import { IStoreState } from "../types";

export const initializeState: IStoreState = {
    productList: [],
    currentPage: 1,
    currentList: [],
    cart: [],
    pageTotal: 1,
    pageCount: 5,
}

export const reducer = (
    state = initializeState,
    action: ActionType<typeof Actions>
) => {
    switch(action.type){
        case getType(Actions.fetchItemList):
            return {
                ...state,
                productList: action.payload
            };
        case getType(Actions.fetchCurrentList):
            return {
                ...state,
                currentList: action.payload
            }
        case getType(Actions.getPageTotal):
            return {
                ...state,
                pageTotal: action.payload
            }
        case getType(Actions.changePage):
            return{
                ...state,
                currentPage: action.payload
            }
        case getType(Actions.updateCartItem):
            return{
                ...state,
                cart: action.payload 
            }
        default: 
            return Object.assign({}, state)
    }
}