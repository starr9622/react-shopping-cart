import * as React from 'react';
import NumberWrap from './NumberWrap';

export default function PriceWrap(props: { title: string; price: number }) {
  return (
    <>
      <div>
        <span>{props.title}</span>
        <span>
          <NumberWrap num={props.price} />원
        </span>
      </div>
    </>
  );
}
