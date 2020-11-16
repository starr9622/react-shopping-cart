import * as React from 'react';

export default function NumberWrap(props: { num: number }) {
  const num = String(props.num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  return <>{num}</>;
}
