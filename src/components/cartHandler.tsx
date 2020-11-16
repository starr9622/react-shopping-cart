import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItem, cartAllCheck } from '../actions';
export default function CartHandler(props: {
  allCheck: boolean;
  select: number;
}) {
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
