import * as React from 'react';
import { PropsNumberWrap } from '../types';

export default function NumberWrap(props: PropsNumberWrap) {
  const num = String(props.num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  return <>{num}</>;
}
