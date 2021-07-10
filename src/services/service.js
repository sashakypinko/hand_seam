import {API_BASE_URL} from '../config';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class BaseService {

    constructor() {
        this.instance = axios.create({
            baseURL: `${API_BASE_URL}/api`,
            params: {
                userID: Cookies.get('userID')
            }
        });
    }

    makeRequest = (request) => {
        return new Promise((resolve, reject) => {
            request
                .then(({data}) => resolve(data))
                .catch(reject);
        })
    }

    get = (url, params = {}) => {
        const request = this.instance.get(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            params
        });

        return this.makeRequest(request)
    };

    post = (url, params = {}) => {
        const request = this.instance.post(url, params);

        return this.makeRequest(request);
    };
}
