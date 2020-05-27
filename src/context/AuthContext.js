import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
  isAuth: true,
  login: () => {},
  data: [],
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);

  const loginHandler = (resData, loginData) => {
    setIsAuthenticated(false);
    setUserData(resData);
    storeData(loginData);
  };

  const storeData = async loginData => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(loginData));
      const value = await AsyncStorage.getItem('userData');
      console.log(JSON.parse(value));
    } catch (error) {
      // saving error
    }
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
