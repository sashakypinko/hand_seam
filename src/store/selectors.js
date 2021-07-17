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

export const selectAddToCartModalStatus = ({cart}) => cart.addToCartModalStatus;

export const selectAddedItem = ({cart}) => cart.addedItem;

export const selectAddingItem = ({cart}) => cart.addingProduct;

export const selectCartItemAdding = ({cart}) => cart.adding;

export const selectVisitDiscount = ({discount}) => discount.onVisit || {};

export const selectPaymentDiscount = ({discount}) => discount.onPay || {};

export const selectDiscountCodes = ({discount}) => discount;

export const selectClient = ({client}) => client;
