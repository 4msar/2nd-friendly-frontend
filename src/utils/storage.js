import { encrypt } from "./encryption";


export const appStorage = {
    get: (key) => typeof window !== 'undefined' ?  window.localStorage.getItem(key) : null,
    set: (key, value) => {
        typeof window !== 'undefined' ?  window.localStorage.setItem(key, value) : null;
    },
    remove: (key) => typeof window !== 'undefined' ? window.localStorage.removeItem(key) : null,
};

export const tempStorage = {
    get: (key) => window.sessionStorage.getItem(key),
    set: (key, value) => {
        window.sessionStorage.setItem(key, value);
    },
    remove: (key) => window.sessionStorage.removeItem(key),
};

// export const secureStorage = {
//     get: (key) => decrypt(window.localStorage.getItem(encrypt(key)) ?? ''),
//     set: (key, value) => {
//         window.localStorage.setItem(encrypt(key), encrypt(value));
//     },
//     remove: (key) => window.localStorage.removeItem(encrypt(key)),
// };

export const secureStorage = appStorage;

export const jsonStorage = {
    get: (key) => {
        try {
            return JSON.parse(window.localStorage.getItem(key) ?? "{}");
        } catch (e) {
            return {};
        }
    },
    set: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key) => window.localStorage.removeItem(key),
};

export const secureJsonStorage = {
    get: (key) => {
        try {
            return JSON.parse(appStorage.get(encrypt(key)) ?? "{}");
        } catch (e) {
            return {};
        }
    },
    set: (key, value) => {
        window.localStorage.setItem(encrypt(key), value);
    },
    remove: (key) => window.localStorage.removeItem(encrypt(key)),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    appStorage,
    jsonStorage,
};
