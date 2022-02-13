import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import axios from "axios";
import { useState } from "react";
import { UserContext } from "../UserContext";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import RegIcon from "@mui/icons-material/HowToReg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const userContext = React.useContext(UserContext);

  React.useEffect(() => {
    setIsUserLoggedIn(!!userContext.userInfo);
    if (userContext.userInfo) setUserName(userContext.userInfo.fullname);
  }, [userContext]);

  const handleLoginClick = () => {
    axios
      .get("./users/details", { params: { userEmail, userPassword } })
      .then((res) => {
        const info = res.data?.user;
        userContext.setUserInfo(info);
      });
  };

  const handleLogoutClick = () => {
    setIsUserLoggedIn(false);
    userContext.setUserInfo("");
  };

  //google sign in

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Button
          endIcon={<RegIcon />}
          style={{
            background: "#ffa722",
            color: "white",
            margin: 8,
            marginTop: 13,
          }}
          onClick={handleOpen}
        >
          Login
        </Button>

        <Modal open={open} onClose={handleClose} width="400px">
          <Box component="form" noValidate autoComplete="on" sx={style}>
            <FormControl
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: { sm: "1fr" },
                gap: 2,
                mt: 4,
              }}
            >
              <TextField
                required
                id="outlined-required"
                onChange={(e) => setUserEmail(e.target.value)}
                label="Email"
                size="small"
                style={{
                  margin: 10,
                  marginTop: 13,
                }}
              />

              <TextField
                onChange={(e) => setUserPassword(e.target.value)}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
                marginTop="13"
                style={{
                  margin: 10,
                  marginTop: 13,
                }}
              />

              <Button
                onClick={handleLogoutClick}
                endIcon={<Logout />}
                style={{
                  background: "#ffa722",
                  color: "white",
                  marginRight: 30,
                }}
              >
                Logout
              </Button>

              <Button
                onClick={handleLoginClick}
                endIcon={<Login />}
                style={{
                  background: "#ffa722",
                  color: "white",
                  margin: 10,
                  marginTop: 15,
                }}
              >
                Login
              </Button>
            </FormControl>
          </Box>
        </Modal>
      </div>
    </Box>
  );
}
