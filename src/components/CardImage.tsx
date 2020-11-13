import * as React from "react";
import { PropsImage } from "../types";

export default function CardImage(props: PropsImage){
    return <img src={props.src} alt={props.alt} />
}