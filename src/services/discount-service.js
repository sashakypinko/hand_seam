import BaseService from "./service";

class DiscountService extends BaseService {

    getDiscounts = () => this.get('/discount/get');

    getDiscountCodes = () => this.get('/discount/get-codes');

    addDiscount = (data) => this.post('/discount/add-code', data)
}

export const DiscountApi = new DiscountService();
