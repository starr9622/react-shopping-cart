import * as React from "react";
import ListCard from "../components/ListCard"
import Pagination from "../components/Pagination"
import { ProductType, IStoreState, PropsCart } from "../types";
import { useSelector, useDispatch } from 'react-redux';

export default function ItemList(){
    const currentList = useSelector((state:IStoreState) => state.currentList);
    const cart = useSelector((state:IStoreState) => state.cart);
    const pageTotal = useSelector((state:IStoreState) => state.pageTotal);
    return (
        <>
        <div className="listWrap"> 
        {currentList.map((data:ProductType) => {
            if(data){
            return <ListCard key={data.id} title={data.title} src={data.coverImage} price={data.price} flag={cart.some((item)=> item.id === data.id)}/>
            }
        })}</div>
        <Pagination page={pageTotal}/>
        </>
    )
}
