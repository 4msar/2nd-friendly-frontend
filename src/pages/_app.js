import "@/styles/globals.css";
import "@/assets/css/style.css";
import "@/assets/css/custom.css";
import "@/assets/css/account.css";
import AppServiceProvider from "@/services/AppServiceProvider";


export default function App({ Component, pageProps }) {
  return (
    <AppServiceProvider>
      <Component {...pageProps} />
    </AppServiceProvider>
  );
}
