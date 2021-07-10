import BaseService from "./service";

class ProductService extends BaseService {

    getProducts = (data) => this.get('/products/get-all', data);

    getProduct = (id) => this.get('/products/get', {id});

    getPriceRange = () => this.get('/products/get-price-range');
}

export const ProductApi = new ProductService();

