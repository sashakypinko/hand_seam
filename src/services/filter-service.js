import BaseService from "./service";

class FilterService extends BaseService {

    getFilterFields = () => this.get('/get-filter-fields');
}

export const FilterApi = new FilterService();
