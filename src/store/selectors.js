export const selectProductList = ({productList}) => productList;

export const selectCategoryList = ({categoryList}) => categoryList;

export const selectProduct = ({product}) => product;

export const selectFilterFields = ({filterFields}) => filterFields;

export const selectSizes = ({sizeList}) => sizeList;

export const selectCartItems = ({cart}) => cart;

export const selectCartItemsCount = ({cart}) => cart.cartItemsCount;

export const selectCartTotalPrice = ({cart}) => cart.cartItemsTotalPrice;

export const selectProductPagesCount = ({productList}) => productList.pagesCount;

export const selectAddedItemModalStatus = ({cart}) => cart.addedItemModalStatus;
