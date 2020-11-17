import * as React from 'react';
import ListCard from '../components/ListCard';
import Pagination from '../components/Pagination';
import { ProductType, IStoreState } from '../types';
import { useSelector } from 'react-redux';

export default function ItemList() {
  const { currentList, pageTotal, cart, currentPage } = useSelector(
    (state: IStoreState) => state
  );
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
                cart={cart}
                coupon={data.hasOwnProperty('availableCoupon')}
              />
            );
        })}
      </div>
      <Pagination page={pageTotal} currentPage={currentPage} />
    </>
  );
}
