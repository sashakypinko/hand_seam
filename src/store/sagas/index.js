import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_PRODUCT_REQUEST} from "../actions/product";
import {FETCH_PRODUCTS_REQUEST} from "../actions/product-list";
import {FETCH_CATEGORIES_REQUEST} from "../actions/category-list";
import {FETCH_FILTER_FIELDS_REQUEST} from "../actions/filter-fields";
import {FETCH_SIZES_REQUEST} from "../actions/size-list";
import {
    ADD_CART_ITEM_REQUEST,
    CHANGE_CART_ITEM_COUNT_REQUEST,
    FETCH_CART_ITEMS_COUNT_REQUEST,
    FETCH_CART_LIST_REQUEST,
    REMOVE_CART_ITEM_REQUEST
} from "../actions/cart";

import {fetchProducts} from "./product-list";
import {fetchProduct} from "./product";
import {fetchCategories} from "./category-list";
import {fetchFilterFields} from "./filter-fields";
import {fetchSizes} from "./size-list";
import {addCartItem, changeCartItemsCount, fetchCartItemsCount, fetchCartList, removeCartItem} from "./cart";
import {ADD_DISCOUNT_CODE_REQUEST, FETCH_DISCOUNTS_REQUEST, GET_DISCOUNT_CODES_REQUEST} from "../actions/discount";
import {addDiscountCode, fetchDiscountCodes, fetchDiscounts} from "./discount";
import {CHANGE_LANGUAGE_REQUEST, FETCH_CLIENT_REQUEST} from "../actions/client";
import {changeLanguage, fetchClient} from "./client";
import {FETCH_POPULAR_PRODUCTS_REQUEST} from "../actions/popular-products";
import {fetchPopularProducts} from "./popular-products";

function* rootSaga() {
    yield all([
        takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts),
        takeEvery(FETCH_PRODUCT_REQUEST, fetchProduct),
        takeEvery(FETCH_POPULAR_PRODUCTS_REQUEST, fetchPopularProducts),
        takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories),
        takeEvery(FETCH_FILTER_FIELDS_REQUEST, fetchFilterFields),
        takeEvery(FETCH_SIZES_REQUEST, fetchSizes),
        takeEvery(ADD_CART_ITEM_REQUEST, addCartItem),
        takeEvery(REMOVE_CART_ITEM_REQUEST, removeCartItem),
        takeEvery(FETCH_CART_LIST_REQUEST, fetchCartList),
        takeEvery(FETCH_CART_ITEMS_COUNT_REQUEST, fetchCartItemsCount),
        takeEvery(CHANGE_CART_ITEM_COUNT_REQUEST, changeCartItemsCount),
        takeEvery(FETCH_DISCOUNTS_REQUEST, fetchDiscounts),
        takeEvery(ADD_DISCOUNT_CODE_REQUEST, addDiscountCode),
        takeEvery(GET_DISCOUNT_CODES_REQUEST, fetchDiscountCodes),
        takeEvery(FETCH_CLIENT_REQUEST, fetchClient),
        takeEvery(CHANGE_LANGUAGE_REQUEST, changeLanguage),
    ]);
}

export default rootSaga;
