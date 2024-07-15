import ScrollToTop from "@/components/ScrollToTop";
import { StartUp } from "@/components/Startup";
import { useAppToken } from "@/hooks/useToken";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import React from "react";

function AppServiceProvider({ version = "v1.0.0", children }) {
  useAppToken(); // Get the App access token
  // //console.log();

  try {
    console.lavel("info", `[App Version] ${version}`);
  } catch (error) {
    //console.log('info', `[App Version] ${version}`);
  }

  const snackbarRef = React.createRef();
  const onClickDismiss = (key) => () => {
    snackbarRef.current.closeSnackbar(key);
  };

  return (
    <>
      {/* <ThemeConfig> */}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StartUp />
      <ScrollToTop />
      <SnackbarProvider
        ref={snackbarRef}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={5000}
        preventDuplicate
        maxSnack={3}
        action={(key) => (
          <IconButton
            color="inherit"
            onClick={onClickDismiss(key)}
            size="large"
          >
            <Close />
          </IconButton>
        )}
      >
        {children}
      </SnackbarProvider>
      {/* </ThemeConfig> */}
    </>
  );
}

export default AppServiceProvider;
