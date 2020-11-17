import * as React from 'react';
import { PropsCardInfo } from '../types';
import NumberWrap from './NumberWrap';

export default function CardInfo(props: PropsCardInfo) {
  return (
    <div className="infoWrap">
      <span className={props.coupon ? 'coupon' : ''}>{props.title}</span>
      <span>
        <NumberWrap num={props.price} />원
      </span>
    </div>
  );
}
