export interface PropsImage {
  src: string;
  alt: string;
}
export interface PropsCartButton {
  id: string;
  cart: string[];
}
export interface PropsCardInfo {
  title: string;
  price: number;
}
export interface PropsListCard extends PropsCardInfo, PropsCartButton {
  src: string;
  cart: string[];
}

export interface PropsPagination {
  page: number;
  currentPage: number;
}

export interface PropsCheckItem {
  item: ProductType;
  checkList: string[];
}

export interface PropsCartHandler {
  allCheck: boolean;
  select: number;
}

export interface PropsCartInfoWrap {
  list: ProductType[];
  checkList: string[];
}

export interface PropsCouponSelect {
  select: string;
  coupon: Coupon[];
}

export interface PropsDisCountWrap {
  total: number;
  disCountPrice: number;
}

export interface PropsNumberWrap {
  num: number;
}

export interface PropsPriceWrap {
  title: string;
  price: number;
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
