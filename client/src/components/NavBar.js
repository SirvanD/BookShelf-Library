import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginForm from "./LoginForm";
import SignupModal from "./SignupModal";
import AccountModal from "./AccountModal";

export default function ButtonAppBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#f1f5ff" }}>
        <Toolbar>
          <Typography pt={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="" />
            <img src="./title.svg" alt="" />
          </Typography>

          {isUserLoggedIn ? <></> : <LoginForm />}

          {isUserLoggedIn ? <></> : <SignupModal />}

          {isUserLoggedIn ? <AccountModal /> : <></>}
          {isUserLoggedIn ? (
            <Typography
              variant="h7"
              component="p"
              sx={{
                flexGrow: 0,
                color: "#ffa722",
                marginLeft: 5,
                backgroundColor: "white",
                padding: 1,
                fontWeight: "bolder",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              Welcome User1
            </Typography>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
