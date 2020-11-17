import * as React from 'react';
import { PropsCartButton } from '../types';
import { useDispatch } from 'react-redux';
import { changeCartItem } from '../actions';

export default function CartButton(props: PropsCartButton) {
  const dispatch = useDispatch();
  const icon = props.cart.some((item) => item === props.id) ? '🛍️' : '🛒';
  return (
    <span
      className="cartIcon"
      onClick={() => dispatch(changeCartItem(props.id))}
    >
      {icon}
    </span>
  );
}
