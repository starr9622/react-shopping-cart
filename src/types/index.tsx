export interface PropsImage {
  src: string;
  alt: string;
}
export interface PropsCartButton {
  id: string;
}
export interface PropsCardInfo {
  title: string;
  price: number;
}
export interface PropsListCard extends PropsCardInfo, PropsCartButton {
  src: string;
}

export interface PropsPagination {
  page: number;
}
export interface ProductType {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}
export interface Coupon {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
export interface IStoreState {
  productList: ProductType[];
  currentPage: number;
  currentList: ProductType[];
  cart: string[];
  pageTotal: number;
  pageCount: number;
  couponList: Coupon[];
  cartCheckList: string[];
  selectCoupon: string;
}
