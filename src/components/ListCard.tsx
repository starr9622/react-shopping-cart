import * as React from "react";
import { PropsListCard } from "../types";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CartButton from "./CartButton";

export default function ListCard(props: PropsListCard){
    return (
        <div className="cardWrap">
            <div>
                <CardImage src={props.src} alt={props.title}/>
            </div>
            <div>
                <CardInfo title={props.title} price={props.price}/>
                <CartButton flag={props.flag}/>
            </div>
        </div>
    );
}