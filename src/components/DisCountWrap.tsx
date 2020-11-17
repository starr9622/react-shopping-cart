import * as React from 'react';
import PriceWrap from './PriceWrap';
import NumberWrap from './NumberWrap';
import { PropsDisCountWrap } from '../types';

export default function DisCountWrap(props: PropsDisCountWrap) {
  return (
    <>
      <div className="disCountWrap">
        <p>결제금액</p>
        <PriceWrap title="총 상품금액" price={props.total} />
        <PriceWrap title="총 할인금액" price={-props.disCountPrice} />
        <PriceWrap
          title="총 결제금액"
          price={props.total - props.disCountPrice}
        />
      </div>
      <div className="paymentBtn">
        <NumberWrap num={props.total - props.disCountPrice} />원 결제하기
      </div>
    </>
  );
}
