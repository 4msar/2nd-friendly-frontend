import { isEmpty } from "@/helpers/functions";
import { useAuthStore } from "@/store";
import axios from "axios";

const useToken = () => {
  const expires_in = useAuthStore((state) => state.expires_in);
  const user = useAuthStore((state) => state.user);
  const isExpired = Date.now() >= expires_in;

  const expire_remaining = expires_in - Date.now();

  return !isExpired && !isEmpty(user);
};

// export const useAppToken = async () => {
//   const authToken = useAuthStore((state) => state.access_token);

//   try {
//     const isExpired = Date.now() >= authToken.expires_in * 1000;
//     if (isExpired) {
//       const newToken = await Authorization.token();
//       return newToken;
//     }
//     return !isExpired ? authToken : null;
//   } catch {
//     return null;
//   }
// };

export const useAppToken = async () => {
  const authToken = useAuthStore((state) => state.access_token);

  if (authToken) {
    axios.interceptors.request.use((config) => {
      config.headers
        ? (config.headers.Authorization = `Bearer ${authToken}`)
        : (config.headers = { Authorization: `Bearer ${authToken}` });
      return config;
    });
  }
};

export default useToken;
