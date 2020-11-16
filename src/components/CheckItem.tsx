import * as React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState, ProductType } from '../types';
import { cartItemCheck } from '../actions';

export default function CheckItem(props: { item: ProductType }) {
  const dispatch = useDispatch();
  const cartCheckList = useSelector(
    (state: IStoreState) => state.cartCheckList
  );
  return (
    <>
      <div className="cartListRow">
        <input
          type="checkbox"
          name={props.item.id}
          checked={cartCheckList.some((cart) => cart === props.item.id)}
          onChange={() => dispatch(cartItemCheck(props.item.id))}
        />
        <CardImage src={props.item.coverImage} alt={props.item.title} />
        <CardInfo title={props.item.title} price={props.item.price} />
      </div>
    </>
  );
}
