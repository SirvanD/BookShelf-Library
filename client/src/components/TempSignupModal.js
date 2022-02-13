import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegIcon from "@mui/icons-material/HowToReg";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmitUser = (e) => {
    e.preventDefault();

    axios
      .post("./users/add", {
        fullname: name,
        email: email,
        password: password,
        address: address,
      })
      .then((res) => {
        setOpen(false);
        console.log(res);
      });
  };

  return (
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
                gap: 2,
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
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-input-email"
                label="Email"
                defaultValue=""
                InputProps={{}}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-input-password"
                label="Password"
                defaultValue=""
                InputProps={{}}
                type="password"
              />
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                id="outlined-input-address"
                label="Address"
                defaultValue=""
                InputProps={{}}
                type="text"
              />

              <Button
                type="submit"
                onClick={handleSubmitUser}
                variant="contained"
                style={{ background: "#ffa722", color: "white" }}
              >
                SignUp
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
