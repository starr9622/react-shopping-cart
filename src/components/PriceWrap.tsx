import * as React from 'react';
import NumberWrap from './NumberWrap';
import { PropsPriceWrap } from '../types';

export default function PriceWrap(props: PropsPriceWrap) {
  const className =
    props.title.indexOf('할인') !== -1
      ? 'priceWrap discount'
      : props.title.indexOf('결제') !== -1
      ? 'priceWrap payment'
      : 'priceWrap';
  return (
    <>
      <div className={className}>
        <span>{props.title}</span>
        <span>
          <NumberWrap num={props.price} />원
        </span>
      </div>
    </>
  );
}
