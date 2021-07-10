import BaseService from "./service";

class SizeService extends BaseService {

    getSizes = () => this.get('/sizes/get-all');
}

export const SizeApi = new SizeService();
