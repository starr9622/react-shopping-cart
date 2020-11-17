import * as React from 'react';
import NumberWrap from './NumberWrap';
import { PropsPriceWrap } from '../types';

export default function PriceWrap(props: PropsPriceWrap) {
  return (
    <>
      <div className="priceWrap">
        <span>{props.title}</span>
        <span>
          <NumberWrap num={props.price} />원
        </span>
      </div>
    </>
  );
}
