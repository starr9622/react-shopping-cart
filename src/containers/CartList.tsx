import * as React from 'react';
import CardImage from '../components/CardImage';
import CardInfo from '../components/CardInfo';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState, ProductType } from '../types';
import { deleteCartItem } from '../actions';

export default function CartList() {
  const dispatch = useDispatch();
  const cart = useSelector((state: IStoreState) => state.cart);
  const productList = useSelector((state: IStoreState) => state.productList);
  const cartList = productList.filter((product) =>
    cart.some((item) => item === product.id)
  );
  const [checked, changeChecked] = React.useState(cart);

  function CartList(props: { list: ProductType[] }) {
    if (props.list.length) {
      return (
        <>
          {props.list.map((item) => (
            <div className="cartListRow" key={item.id}>
              <input
                type="checkbox"
                name={item.id}
                checked={checked.some((i) => i === item.id)}
                onChange={() =>
                  checked.some((i) => i === item.id)
                    ? changeChecked(checked.filter((i) => i !== item.id))
                    : changeChecked(checked.concat([item.id]))
                }
              />
              <CardImage src={item.coverImage} alt={item.title} />
              <CardInfo title={item.title} price={item.price} />
            </div>
          ))}
        </>
      );
    } else {
      return <p>장바구니가 비었습니다.</p>;
    }
  }

  return (
    <>
      <div className="cartListRow">
        <input
          type="checkbox"
          name="allCheck"
          checked={checked.length === cart.length}
          onChange={() =>
            checked.length === cart.length
              ? changeChecked([])
              : changeChecked(cart)
          }
        />
        <label>{checked.length}개 선택</label>
        <button
          onClick={() => {
            dispatch(deleteCartItem(checked));
            changeChecked([]);
          }}
        >
          상품 삭제
        </button>
      </div>
      <div className="cartListWrap">
        <CartList list={cartList} />
      </div>
    </>
  );
}
