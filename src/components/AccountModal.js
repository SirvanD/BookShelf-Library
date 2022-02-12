import { Button } from "@mui/material";
import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

function AccountModal() {
  return (
    <div>
      <Button
        endIcon={<LocalLibraryIcon />}
        style={{ background: "#ffa722", color: "white", margin: 8 }}
      >
        Account
      </Button>
    </div>
  );
}

export default AccountModal;
