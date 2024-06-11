
import { APP_AUTHORIZE_USER, APP_AUTHORIZE_USER_KEY, APP_LOGIN_ACCESS_TOKEN_KEY, APP_LOGIN_REFRESH_TOKEN_KEY, APP_NAME, APP_SITE_REFRESH_TOKEN_KEY, APP_SITE_REGISTER_TOKEN } from '@/helpers/config';
import { secureJsonStorage, secureStorage } from '@/utils/storage';
import jwtDecode from 'jwt-decode';

const AppService = {
    getAppName: () => APP_NAME,
    getAuthToken: () => secureStorage.get(APP_LOGIN_ACCESS_TOKEN_KEY),
    getAuthUser:() => secureStorage.get(APP_AUTHORIZE_USER),
    getJwtUser: () => {
        try {
            const tokenizedUser = jwtDecode(secureStorage.get(APP_LOGIN_ACCESS_TOKEN_KEY) ?? '');
            return tokenizedUser ?? {};
        } catch (e) {
            return {};
        }
    },
    getAuthRefreshToken: () => secureStorage.get(APP_LOGIN_REFRESH_TOKEN_KEY),
    getSiteRefreshToken: () => secureStorage.get(APP_SITE_REFRESH_TOKEN_KEY),
    getSiteToken: () => secureStorage.get(APP_SITE_REGISTER_TOKEN),
    getAuthUser: (key = null) => {
        const user = secureJsonStorage.get(APP_AUTHORIZE_USER_KEY);
        if (key) return user[key] ?? '';
        return user;
    },

    clearStorage: () => localStorage.clear(),
};

export default AppService;
if(typeof window !== 'undefined'){window.AppService = AppService;}

