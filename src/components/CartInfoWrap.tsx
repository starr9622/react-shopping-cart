import * as React from 'react';
import { PropsCartInfoWrap } from '../types';
import CheckItem from './CheckItem';

export default function CartInfoWrap(props: PropsCartInfoWrap) {
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
