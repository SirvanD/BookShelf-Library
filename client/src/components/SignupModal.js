import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegIcon from "@mui/icons-material/HowToReg";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-config";

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

export default function SignupModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      if (user) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      console.log(user);

      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    return signInWithPopup(auth, provider);
  };

  return (
    <div>
      {user ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
          }}
        >
          <div>
            <Button
              endIcon={<LogoutIcon />}
              onClick={logout}
              style={{
                background: "#ffa722",
                color: "white",
                margin: 8,
                marginTop: 13,
              }}
            >
              {" "}
              Sign Out{" "}
            </Button>
          </div>
          <div>
            <h4
              style={{
                background: "#ffc800",
                color: "#14110a",
                margin: 8,
                marginTop: 13,
                padding: 8,
                borderRadius: 5,
                fontWeight: 400,
              }}
            >
              Welcome {user?.displayName}
            </h4>
          </div>
        </Box>
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
            Sign up
          </Button>
          <Modal open={open} onClose={handleClose} width="400px">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Please Fill in the Form
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <FormControl
                  sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: { sm: "1fr" },
                    gap: 3,
                    mt: 4,
                  }}
                >
                  <TextField
                    onChange={(e) => setName(e.target.value)}
                    id="userName"
                    label="Name"
                    defaultValue=""
                    InputProps={{}}
                  />
                  <TextField
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    id="outlined-input-email"
                    label="Email"
                    defaultValue=""
                    InputProps={{}}
                  />
                  <TextField
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    id="outlined-input-password"
                    label="Password"
                    defaultValue=""
                    InputProps={{}}
                    type="password"
                  />

                  <Button
                    type="submit"
                    onClick={register}
                    variant="contained"
                    style={{
                      background: "#ffa722",
                      color: "white",
                      marginBottom: 20,
                      marginTop: 10,
                    }}
                  >
                    SignUp
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
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
