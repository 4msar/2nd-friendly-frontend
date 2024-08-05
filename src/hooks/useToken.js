import { isEmpty, logOut } from "@/helpers/functions";
import { useAuthStore } from "@/store";
import axios from "axios";
import { useEffect } from "react";

const useToken = () => {
  const expires_in = useAuthStore((state) => state.expires_in);
  const accessToken = useAuthStore((state) => state.access_token);
  const user = useAuthStore((state) => state.user);
  const isExpired = Date.now() >= expires_in;

  if (accessToken === "loading") return null;

  return !isExpired && !isEmpty(user);
};

export const useAppToken = async () => {
  const authToken = useAuthStore((state) => state.access_token);

  if (authToken && authToken !== 'loading') {
    console.log({ authToken });
    axios.interceptors.request.use((config) => {
      config.headers
        ? (config.headers.Authorization = `Bearer ${authToken}`)
        : (config.headers = { Authorization: `Bearer ${authToken}` });
      return config;
    });
  }
};

export default useToken;
