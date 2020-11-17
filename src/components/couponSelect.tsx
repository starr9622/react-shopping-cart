import * as React from 'react';
import { PropsCouponSelect } from '../types';
import { useDispatch } from 'react-redux';
import { selectCoupon } from '../actions';

export default function CouponSelect(props: PropsCouponSelect) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="couponWrap">
        <label>쿠폰선택</label>
        <select
          defaultValue=""
          onChange={(e) => dispatch(selectCoupon(e.target.value))}
        >
          <option value="">쿠폰을 선택하세요.</option>
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
