export interface PropsImage {
    src : string,
    alt : string,
}
export interface PropsCartButton {
    flag : boolean
}
export interface PropsCardInfo {
    title : string,
    price : number
}
export interface PropsListCard extends PropsCardInfo, PropsCartButton {
    src : string,
}

export interface PropsPagination{
    page: number;
}
export interface ProductType{
    id: string,
    title: string,
    coverImage: string,
    price: number
    score: number
    availableCoupon?: boolean
}
export interface PropsCart{
    id: string
}
export interface IStoreState{
    productList: ProductType[],
    currentPage: number,
    currentList: ProductType[],
    cart: PropsCart[],
    pageTotal: number,
    pageCount: number
}