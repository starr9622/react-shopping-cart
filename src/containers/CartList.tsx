import * as React from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../types';
import CartInfoWrap from '../components/CartInfoWrap';
import CartHandler from '../components/CartHandler';

export default function CartList() {
  const cart = useSelector((state: IStoreState) => state.cart);
  const productList = useSelector((state: IStoreState) => state.productList);
  const cartCheckList = useSelector(
    (state: IStoreState) => state.cartCheckList
  );
  const cartList = productList.filter((product) =>
    cart.some((item) => item === product.id)
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
    </>
  );
}
