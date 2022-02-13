import React, { useState } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { UserContext } from "./UserContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  marginTop: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function App() {
  const [userInfo, setUserInfo] = useState();
  const [bookStore, setBookStore] = useState([]);
  // creating a state for storing info what we're gonna use in our context

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fullname = localStorage.getItem("fullname");
    if (userId) {
      setUserInfo({ _id: userId, fullname });
      // console.log(`fullname is`, fullname);
    }
  }, []);

  React.useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userId", userInfo._id);
      localStorage.setItem("fullname", userInfo.fullname);
      // console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <div className="App">
      {/* Provider , providing all context values to any component that will need them. */}
      <UserContext.Provider
        value={{ userInfo, setUserInfo, bookStore, setBookStore }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: "99%",

            margin: "5px",

            marginTop: "0",
          }}
        >
          <Grid container spacing={0} rowSpacing={0} columnSpacing={1}>
            <Grid item xs={12}>
              <Item>
                <NavBar />
              </Item>
            </Grid>

            <Grid item xs={12} pr={1} pl={0} pt={0} ml={0}>
              <Item>
                <SideBar />
              </Item>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Item>
                &copy; 2022 by Sirvan Doukchi{" "}
                <a href="https://www.sirvan.dev" target="_blank">
                  www.sirvan.dev
                </a>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </UserContext.Provider>
    </div>
  );
}
