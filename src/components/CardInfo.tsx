import * as React from "react";
import { PropsCardInfo } from "../types";

export default function CardInfo(props : PropsCardInfo){
    const price = String(props.price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    return (
        <div className="infoWrap">
            <span>{props.title}</span>
            <span>{price}원</span>
        </div>
    )
}