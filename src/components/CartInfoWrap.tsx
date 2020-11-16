import * as React from 'react';
import { ProductType } from '../types';
import CheckItem from './CheckItem';

export default function CartInfoWrap(props: {
  list: ProductType[];
  checkList: string[];
}) {
  if (props.list.length) {
    return (
      <>
        {props.list.map((item) => (
          <CheckItem key={item.id} item={item} checkList={props.checkList} />
        ))}
      </>
    );
  } else {
    return <p>장바구니가 비었습니다.</p>;
  }
}
