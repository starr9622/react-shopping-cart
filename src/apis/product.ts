import productItems from "../data/productItems";
import coupons from "../data/coupons";

export function fetchItemList(){
    return {data:productItems};
}

export function fetchCouponList(){
    return {data:coupons};
}