export const CartState = {
    cartItems: [],
    cartItemsCount: 0,
    cartItemsTotalPrice: 0,
    addedItem: {},
    addingProduct: {},
    addedItemModalStatus: false,
    addToCartModalStatus: false,
    adding: false,
    loading: false,
    error: false
};

export const CategoryListState = {
    categories: [],
    error: null,
    loading: true
};

export const FilterFieldsState = {
    fields: [],
    error: null,
    loading: true,
};

export const ProductState = {
    product: {},
    error: null,
    loading: true
};

export const ProductListState = {
    products: [],
    offset: 0,
    error: null,
    pagesCount: 0,
    loading: true,
    total: 0
};

export const SizeListState = {
    sizes: [],
    error: null,
    loading: true
};
