import React from "react";
import axios from "axios";
import { URL } from "../url/url";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true, isUserType: action.UserType };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false, isUserType: null };
    default: {
      //throw new Error(`Unhandled action type: ${action.type}`);
      return { ...state, isAuthenticated: false, isUserType: null };
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
    isUserType: localStorage.getItem("loginUserType"),

  });
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );

}
function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  let url = URL + '/login';
  //let url = "http://localhost/bootstrap-laravel-react/backend-server/api/admin-login";
  setError(false);
  setIsLoading(true);
  axios.post(url, {
    login: login,
    password: password,
  }).then((response) => {
    // console.log(response.data);
    //console.log(response.data.success)

    if (response.data.success === "true") {
      localStorage.setItem('id_token', 1);
      localStorage.setItem('superAdminId', JSON.stringify(response.data.user.id));
      localStorage.setItem('loginUserType', JSON.stringify(response.data.user.user_type));
      localStorage.setItem('superAdminEmail', JSON.stringify(response.data.user.email));
      localStorage.setItem('superAdminName', JSON.stringify(response.data.user.name));
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS', UserType: JSON.stringify(response.data.user.user_type) })
      history.push('/app/dashboard')
    }
    else {

      setError(true);
      setIsLoading(false);
      dispatch({ type: "LOGIN_FAILURE" });
      history.push("/login");
    }


  });

  //https://itdevelopmentservices.com/vamoid/backend-server/api/admin-login



  /*
  if (!!login && !!password) {
    setTimeout(() => {
      localStorage.setItem('id_token', 1)
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })

      history.push('/app/dashboard')
    }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
  */
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  localStorage.removeItem("loginUserType");
  localStorage.removeItem("superAdminId");
  localStorage.removeItem("superAdminEmail");
  localStorage.removeItem("superAdminName");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
