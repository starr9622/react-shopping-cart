import * as React from 'react';
import { useSelector } from 'react-redux';
import { IStoreState, Coupon, ProductType } from '../types';
import CartInfoWrap from '../components/CartInfoWrap';
import CartHandler from '../components/CartHandler';
import CouponSelect from '../components/CouponSelect';
import DisCountWrap from '../components/DisCountWrap';

function disCount(paymentList: ProductType[], coupon: Coupon) {
  let availablePrice = paymentList
    .filter(
      (payment) =>
        !payment.hasOwnProperty('availableCoupon') || payment.availableCoupon
    )
    .reduce((acc, curr) => acc + curr.price, 0);
  if (availablePrice > 0) {
    return Math.round(
      coupon.type === 'amount'
        ? coupon.discountAmount
        : availablePrice / coupon.discountRate
    );
  }
  return 0;
}

export default function CartList() {
  const {
    cart,
    productList,
    cartCheckList,
    couponList,
    selectCoupon,
  } = useSelector((state: IStoreState) => state);
  const cartList = productList.filter((product) =>
    cart.some((item) => item === product.id)
  );
  const paymentList = cartList.filter((pay) =>
    cartCheckList.some((check) => check === pay.id)
  );
  const total = paymentList.reduce((acc, curr) => acc + curr.price, 0);
  const coupon = couponList.find((coupon) => coupon.title === selectCoupon);
  const disCountPrice = disCount(paymentList, coupon);

  return (
    <>
      <CartHandler
        allCheck={cart.length === cartCheckList.length}
        select={cartCheckList.length}
      />
      <div className="cartListWrap">
        <CartInfoWrap list={cartList} checkList={cartCheckList} />
      </div>
      <CouponSelect select={selectCoupon} coupon={couponList} />
      <DisCountWrap total={total} disCountPrice={disCountPrice} />
    </>
  );
}
