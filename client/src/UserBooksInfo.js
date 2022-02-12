import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

import axios from "axios";

export default function UserBooksInfo() {
  const userContext = React.useContext(UserContext);

  useEffect(() => {
    if (!!userContext.userInfo) {
      console.log("getting userbooks");
      axios
        .get("/users/userBooks", {
          params: { userId: userContext.userInfo?._id },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    console.log(userContext.userInfo);
  }, [userContext]);

  return (
    <div>
      <h1> </h1>
    </div>
  );
}
