import React, {useContext} from 'react';

//Screens
import Content from './contentRouter';
import Login from './loginRouter';

//Context
import {AuthContext} from '../context/AuthContext';

//Router structure provides the switch between Home Page and Login Page
const Router = () => {
  const authContext = useContext(AuthContext);

  return authContext.isAuth ? <Content /> : <Login />;
};

export default Router;
