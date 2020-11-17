import * as React from 'react';
import { PropsPagination } from '../types';
import { useDispatch } from 'react-redux';
import { changePage } from '../actions';

export default function Pagination(props: PropsPagination) {
  const dispatch = useDispatch();

  let nav = [...Array(props.page)].map((e, index) => index + 1);
  return (
    <>
      <ul>
        {nav.map((i) => (
          <li
            key={i}
            className={props.currentPage === i ? 'selectPage' : ''}
            onClick={() => dispatch(changePage(i))}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}
