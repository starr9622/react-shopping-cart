import * as React from 'react';
import ListCard from '../components/ListCard';
import Pagination from '../components/Pagination';
import { ProductType, IStoreState } from '../types';
import { useSelector } from 'react-redux';

export default function ItemList() {
  const currentList = useSelector((state: IStoreState) => state.currentList);
  const pageTotal = useSelector((state: IStoreState) => state.pageTotal);
  return (
    <>
      <div className="listWrap">
        {currentList.map((data: ProductType) => {
          if (data)
            return (
              <ListCard
                key={data.id}
                title={data.title}
                src={data.coverImage}
                price={data.price}
                id={data.id}
              />
            );
        })}
      </div>
      <Pagination page={pageTotal} />
    </>
  );
}
