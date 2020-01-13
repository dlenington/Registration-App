import React from "react";
import { useHistory } from "react-router-dom";

//MUI Stuff
import Button from "@material-ui/core/Button";

const MyButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <Button
      type="submit"
      onClick={handleClick}
      variant="contained"
      color="primary"
    >
      Login
    </Button>
  );
};

export default MyButton;
