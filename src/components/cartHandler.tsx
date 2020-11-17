import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItem, cartAllCheck } from '../actions';
import { PropsCartHandler } from '../types';

export default function CartHandler(props: PropsCartHandler) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cartListRow cartHandler">
        <input
          type="checkbox"
          checked={props.allCheck}
          name="allCheck"
          onChange={() => {
            dispatch(cartAllCheck());
          }}
        />
        <label>{props.select}개 선택</label>
        <button onClick={() => dispatch(deleteCartItem())}>상품 삭제</button>
      </div>
    </>
  );
}
