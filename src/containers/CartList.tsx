import * as React from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../types';
import CartInfoWrap from '../components/CartInfoWrap';
import CartHandler from '../components/CartHandler';
import CouponSelect from '../components/CouponSelect';

export default function CartList() {
  const { cart, productList, cartCheckList, couponList } = useSelector(
    (state: IStoreState) => state
  );
  const cartList = productList.filter((product) =>
    cart.some((item) => item === product.id)
  );
  const paymentList = cartList.filter((pay) =>
    cartCheckList.some((check) => check === pay.id)
  );

  return (
    <>
      <CartHandler
        allCheck={cart.length === cartCheckList.length}
        select={cartCheckList.length}
      />
      <div className="cartListWrap">
        <CartInfoWrap list={cartList} checkList={cartCheckList} />
      </div>
      <CouponSelect coupon={couponList} />
    </>
  );
}
