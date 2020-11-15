import * as React from "react";
import { PropsCartButton, IStoreState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { changeCartItem } from "../actions";

export default function CartButton(props:PropsCartButton){
    const cart = useSelector((state:IStoreState)=> state.cart)
    const dispatch = useDispatch();
    const icon = cart.some((item)=> item === props.id) ? '🛍️' : '🛒'; 
    return <span className="cartIcon" onClick={()=>dispatch(changeCartItem(props.id))}>{icon}</span>;
}