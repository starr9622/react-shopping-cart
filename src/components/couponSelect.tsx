import * as React from 'react';
import { Coupon } from '../types';
import { useDispatch } from 'react-redux';
import { selectCoupon } from '../actions';

export default function CouponSelect(props: { coupon: Coupon[] }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="couponWrap">
        <label>쿠폰선택</label>
        <select
          defaultValue={props.coupon[0].title}
          onChange={(e) => dispatch(selectCoupon(e.target.value))}
        >
          {props.coupon.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
