import BaseService from "./service";

class CartService extends BaseService {

    getCartItems = () => this.get('/cart/get-cart-items');

    addCartItem = (data) => this.post('/cart/add-cart-item', data);

    removeCartItem = (id) => this.post('/cart/remove-cart-item', {id});

    changeItemCount = (data) => this.post('/cart/change-cart-item-count', data)

    getItemsCount = () => this.get('/cart/get-items-count')
}

export const CartApi = new CartService();
