import React, {useState, useEffect} from 'react';

export const AuthContext = React.createContext({
  isAuth: true,
  login: () => {},
  data: [],
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);

  const loginHandler = resData => {
    setIsAuthenticated(true);
    setUserData(JSON.stringify(resData));
    //console.log('loginHandler   ' + userData);
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        isAuth: isAuthenticated,
        userData: userData,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
