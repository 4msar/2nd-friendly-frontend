/* eslint-disable import/no-unresolved */
import axios from 'axios';
import {
    API_URL
} from 'helpers/apiUrl';
import { APP_AUTHORIZE_USER_KEY } from 'helpers/config';
import {
    errorHandler
} from 'helpers/functions';
import { secureStorage } from 'utils/storage';


const setAuthTokenBeforeRequest = (config) => {
    const access_token = JSON.parse(secureStorage.get(APP_AUTHORIZE_USER_KEY)) ?? "V345o52ghvdcgh765dZ"
    if (!config.headers.Authorization && access_token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${access_token}`;
        
    }
    return config;
};

export function createFreshApiRequest(baseUrl, config = {}) {
    const apiInstance = axios.create({
        baseURL: baseUrl,
        ...config,
    });

    // Add a response interceptor
    apiInstance.interceptors.response.use(
        (response) => response.data,
        (error) => errorHandler(error)
    );

    return apiInstance;
}

const instance = createFreshApiRequest(API_URL);

export default instance;