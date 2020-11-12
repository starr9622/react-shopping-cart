import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";
// import { IStoreState } from "../types";

export const initializeState = {}

export const reducer = (
    state = initializeState,
    action: ActionType<typeof Actions>
) => {
    switch(action.type){
        default: 
            return Object.assign({}, state)
    }

}