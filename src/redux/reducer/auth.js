/* eslint-disable no-case-declarations */

import { isEmpty } from "@/helpers/functions";
import { SET_CURRENT_USER, SET_USER_DETAILS, SET_USER_IS_AUTHENTICATED } from "../action/types";


const initialState = {
    isAuthenticated: false,
    access_token: null,
    expires_in: null,
    user: {},
    userDetails: {},
};

const authState = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload.user,
            };

        case SET_USER_IS_AUTHENTICATED:
            try {
                
                const { access_token, expires_in, user, userDetails } = action.payload;

                const isExpired = Date.now() >= expires_in;

                if (isExpired || isEmpty(access_token)) {
                    return {
                        ...state,
                        isAuthenticated: false,
                        access_token: null,
                        expires_in: null,
                        user: {},
                        userDetails:{},
                    };
                }

                return {
                    ...state,
                    isAuthenticated: !isEmpty(access_token),
                    access_token,
                    expires_in,
                    user,
                    userDetails
                };
            } catch {
                return {
                    ...state,
                    isAuthenticated: false,
                    access_token: null,
                    expires_in: null,
                    user: {},
                };
            }

        
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action?.payload?.data
            }  
        default:
            return state;
    }
};
export default authState;
