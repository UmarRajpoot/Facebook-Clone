import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // Sign In functions
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
        <img src="https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2012/08/facebook-wordmark-1024x819.png" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
