import * as React from "react";
import { PropsCartButton } from "../types";

export default function CartButton(props:PropsCartButton){
    const [Icon, setIcon] = React.useState(props.flag ? '🛍️' : '🛒'); 
    return <span className="cartIcon" onClick={()=> setIcon(
            // Todo :: redux에 상태 변경 전달
            Icon === '🛍️' ? '🛒' : '🛍️' 
        )}>{Icon}</span>;
}