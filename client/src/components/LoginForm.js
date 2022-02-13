import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Login from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { UserContext } from "../UserContext";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import RegIcon from "@mui/icons-material/HowToReg";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { GoogleLoginButton } from "react-social-login-buttons";

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

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // React.useEffect(() => {
  //   setIsUserLoggedIn(!!userContext.userInfo);
  //   if (userContext.userInfo) setUserName(userContext.userInfo.fullname);
  // }, [userContext]);

  // const handleLoginClick = () => {
  //   axios
  //     .get("./users/details", { params: { userEmail, userPassword } })
  //     .then((res) => {
  //       const info = res.data?.user;
  //       userContext.setUserInfo(info);
  //     });
  // };

  // const handleLogoutClick = () => {
  //   setIsUserLoggedIn(false);
  //   userContext.setUserInfo("");
  // };

  //google sign in

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      console.log(user);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    return signInWithPopup(auth, provider);
  };

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
        {user ? (
          <></>
        ) : (
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
                    mt: 1,
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h"
                    component="h2"
                    style={{
                      margin: 10,
                      marginTop: 13,
                    }}
                  >
                    Login
                  </Typography>
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

                  {/* <Button
                onClick={handleLogoutClick}
                endIcon={<Logout />}
                style={{
                  background: "#ffa722",
                  color: "white",
                  marginRight: 30,
                }}
              >
                Logout
              </Button> */}

                  <Button
                    onClick={login}
                    endIcon={<Login />}
                    style={{
                      background: "#ffa722",
                      color: "white",
                      margin: 10,
                      marginTop: 15,
                      marginBottom: 20,
                    }}
                  >
                    Login
                  </Button>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    align="center"
                  >
                    Or Login with your Google Account
                  </Typography>

                  <GoogleLoginButton on onClick={googleSignIn} />
                </FormControl>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </Box>
  );
}
