/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { APP_AUTHORIZE_USER_KEY } from '../config';
import { API_URL } from '../apiUrl';
import { secureStorage } from '@/utils/storage';
import { errorHandler } from '../functions';
import { useAuthStore } from '@/store';

const setAuthTokenBeforeRequest = (config) => {
    const access_token = JSON.parse(secureStorage.get(APP_AUTHORIZE_USER_KEY)) ?? "V345o52ghvdcgh765dZ"
    if (!config.headers.Authorization && access_token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${access_token}`;
        // config.header['Content-Type'] = 'x-www-form-urlencoded';
        
    }
    return config;
};

export function createApiRequest(baseUrl, config = {}) {
    const apiInstance = axios.create({
        baseURL: baseUrl,
        // withCredentials: true,
        
        ...config,
    });
    // Add a request interceptor
    apiInstance.interceptors.request.use(setAuthTokenBeforeRequest, (error) => errorHandler(error));

    // Add a response interceptor
    apiInstance.interceptors.response.use(
        (response) => response.data, 
        (error) => errorHandler(error)
    );

    return apiInstance;
}

const instance = createApiRequest(API_URL);

export function setAuthorizationToken() {
    const authToken = useAuthStore((state) => state.access_token);
    if (authToken) {
        instance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        // instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        // instance.defaults.headers.patch['Content-Type'] = 'application/json';
    } else {
        delete instance.defaults.headers.common.Authorization;
    }
}

export default instance;