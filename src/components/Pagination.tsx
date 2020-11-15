import * as React from "react";
import { PropsPagination, IStoreState } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../actions";

export default function Pagination(props: PropsPagination){
    const dispatch = useDispatch();
    const currentPage = useSelector((state:IStoreState)=> state.currentPage);

    let nav = [...Array(props.page)].map((e,index) => index+1)
    return (
        <>
            <ul>
            {nav.map(i=> <li key={i} className={currentPage === i ? "selectPage" : ""} onClick={()=>dispatch(changePage(i))}>{i}</li>)}
            </ul>
        </>
    )
}