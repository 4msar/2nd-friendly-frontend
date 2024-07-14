import { isEmpty } from "@/helpers/functions";
import AppService from "@/services/Other";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { logout, setUserIsLoggedIn } from "./action/authAction";
import rootReducer from "./reducer/appReducer";
import { setAuthorizationToken } from "@/helpers/axios";

let devTools =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;
if (
  isEmpty(devTools) ||
  process.env.NODE_ENV === "prod" ||
  process.env.NODE_ENV === "production"
) {
  devTools = (a) => a;
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

const hasToken = AppService.getAuthToken();

if (!isEmpty(hasToken)) {
  try {
    const { access_token, expires_in, user, userDetails } =
      JSON.parse(hasToken);

    const isExpired = Date.now() >= expires_in;
    console.log(access_token);
    if (!isEmpty(access_token)) {
      setAuthorizationToken(hasToken);
      let format = "timestamp";
      store.dispatch(
        setUserIsLoggedIn({
          access_token,
          format,
          expires_in,
          user
        })
      );
    } else {
      store.dispatch(logout());
      console.log("Logout");
    }
  } catch (error) {}
}

export default store;
