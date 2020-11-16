import * as React from 'react';
import CheckItem from '../components/CheckItem';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState, ProductType } from '../types';
import { deleteCartItem, cartAllCheck } from '../actions';

function CartInfoWrap(props: { list: ProductType[] }) {
  if (props.list.length) {
    return (
      <>
        {props.list.map((item) => (
          <CheckItem key={item.id} item={item} />
        ))}
      </>
    );
  } else {
    return <p>장바구니가 비었습니다.</p>;
  }
}

export default function CartList() {
  const dispatch = useDispatch();
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
      <div className="cartListRow">
        <input
          type="checkbox"
          checked={cart.length === cartCheckList.length}
          name="allCheck"
          onChange={() => {
            dispatch(cartAllCheck());
          }}
        />
        <label>{cartCheckList.length}개 선택</label>
        <button onClick={() => dispatch(deleteCartItem())}>상품 삭제</button>
      </div>
      <div className="cartListWrap">
        <CartInfoWrap list={cartList} />
      </div>
    </>
  );
}
