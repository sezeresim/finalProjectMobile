import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
  isAuth: true,
  login: () => {},
  logout: () => {},
  data: [],
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);

  const loginHandler = (resData, loginData) => {
    setIsAuthenticated(true);
    setUserData(resData);
    storeData(loginData);
  };

  const storeData = async loginData => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(loginData));
    } catch (error) {
      // saving error
    }
  };

  const logOutHandler = async () => {
    console.log('remove item');
    await AsyncStorage.removeItem('userData');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        logout: logOutHandler,
        isAuth: isAuthenticated,
        userData: userData,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
