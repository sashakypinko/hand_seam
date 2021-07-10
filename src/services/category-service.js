import BaseService from "./service";

class CategoryService extends BaseService {

    getCategories = () => this.get('/categories/get-all');
}

export const CategoryApi = new CategoryService();
