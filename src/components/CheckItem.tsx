import * as React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import { useDispatch } from 'react-redux';
import { PropsCheckItem } from '../types';
import { cartItemCheck } from '../actions';

export default function CheckItem(props: PropsCheckItem) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cartListRow">
        <input
          type="checkbox"
          name={props.item.id}
          checked={props.checkList.some((cart) => cart === props.item.id)}
          onChange={() => dispatch(cartItemCheck(props.item.id))}
        />
        <CardImage src={props.item.coverImage} alt={props.item.title} />
        <CardInfo title={props.item.title} price={props.item.price} />
      </div>
    </>
  );
}
