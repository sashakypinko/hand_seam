import BaseService from "./service";

class ClientService extends BaseService {

    getClient = () => this.get('/clients/get-client');

    changeLanguage = (language) => this.post('/clients/change-language', {language});
}

export const ClientApi = new ClientService();
