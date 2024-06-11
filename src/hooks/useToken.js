
import { APP_LOGIN_ACCESS_TOKEN_KEY } from "@/helpers/config";
import Authorization from "@/services/Authorization";
import AppService from "@/services/Other";
import { appStorage } from "@/utils/storage";
import {
    useSelector
} from "react-redux";


const useToken = () => {
    const {isAuthenticated, expires_in} = useSelector((state) => state.auth);
    const isExpired = Date.now() >= expires_in;

    const expire_remaining = (expires_in - Date.now());

    // console.log(expire_remaining);

    if(isExpired){
        appStorage.set(APP_LOGIN_ACCESS_TOKEN_KEY, {});
    }

    return !isExpired && isAuthenticated;
};

export const useAppToken = async () => {
    const authToken = AppService.getAuthToken();
    
    try {
        
        const isExpired = Date.now() >= authToken.expires_in * 1000;
        if (isExpired) {
            const newToken = await Authorization.token();
            return newToken;
        }
        return !isExpired ? authToken : null;
    } catch {
        return null;
    }
};

export default useToken;