/* eslint-disable */

import { APP_AUTHORIZE_USER, APP_AUTHORIZE_USER_KEY, APP_LOGIN_ACCESS_TOKEN_KEY, APP_USER_DETAILS } from "@/helpers/config";
import { secureStorage } from "@/utils/storage";
import { SET_USER_IS_AUTHENTICATED } from "./types";
import { setAuthorizationToken } from "@/helpers/axios";



export function setUserIsLoggedIn(payload) {
    const details = JSON.parse(secureStorage.get(APP_USER_DETAILS));
    if (!isEmpty(payload)) {
        const {
            expires_in,
            format
        } = payload;
        if(format !== 'timestamp'){
            const expires_in_date = new Date().getTime() + (expires_in * 1000);
            payload.expires_in = expires_in_date;
            payload.format = 'timestamp';
        }
        payload.userDetails = details;
       
        secureStorage.set(APP_LOGIN_ACCESS_TOKEN_KEY, JSON.stringify(payload));
        secureStorage.set(APP_AUTHORIZE_USER_KEY, JSON.stringify(payload?.access_token));
        secureStorage.set(APP_AUTHORIZE_USER, JSON.stringify(payload?.user));
    }

    return {
        type: SET_USER_IS_AUTHENTICATED,
        payload,
    };
}



export function logout() {
    return (dispatch) => {
        Authorization.logout();
        setAuthorizationToken(false);
        dispatch(setUserIsLoggedIn({}));
        secureStorage.remove(APP_LOGIN_ACCESS_TOKEN_KEY);
        secureStorage.remove(APP_AUTHORIZE_USER_KEY);
        secureStorage.remove(APP_AUTHORIZE_USER);
        secureStorage.remove(APP_USER_DETAILS);
    };
}

export function login(data) {
    return (dispatch) => {
        return Authorization.login(data)
            .then(async (response) => {
                if(response?.status === "success"){
                    dispatch(setUserIsLoggedIn(response));
                    setAuthorizationToken(response?.access_token);
                    dispatch(getUserDetails());
                } else{
                    dispatch(setUserIsLoggedIn({}));
                }
                return response;
            })
            .catch((error, info) => {
                return error;
            });
    };
}

export function userDetailsUpdate(data){
    return (dispatch) => {
        return Authorization.updateDetails(data)
            .then(async (response) => {
                return response;
            })
            .catch((error, info) => {
                return error;
            })
    }
}

export function getUserDetails(){
    return (dispatch) => {
        return Authorization.getUserDetails()
            .then(async (response) => {
                if(response?.status !== "Unauthorized"){
                    secureStorage.set(APP_USER_DETAILS, JSON.stringify(response?.data));
                    dispatch({
                        type: SET_USER_DETAILS,
                        payload: response
                    });
                }
                
            })
    }
}

export function updateUserDetailsAfterLogin(){
    const userDetails = JSON.parse(secureStorage.get(APP_USER_DETAILS));
    return (dispatch) => {
        dispatch({
            type:SET_USER_DETAILS,
            payload: userDetails
        })
    }
}

export function billingAddressUpdate(data){
    return (dispatch) => {
        return Authorization.updateBillingAddress(data)
            .then(async (response) => {
                dispatch(getUserDetails());
                return response;
            }).catch((error, info) => {
                return error;
            }) 
    }
}

export function shippingAddressUpdate(data){
    return (dispatch) => {
        return Authorization.updateShippingAddress(data)
            .then(async (response) => {
                dispatch(getUserDetails());
                return response;
            }).catch((error, info) => {
                return error;
            })
    }
}