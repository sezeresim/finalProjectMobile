import React, {useContext} from 'react';

//Screens
import ContentRouter from './contentRouter';
import LoginRouter from './loginRouter';

//Context
import {AuthContext} from '../context/AuthContext';

//Router structure provides the switch between Home Page and Login Page
const Router = () => {
  const authContext = useContext(AuthContext);

  return authContext.isAuth ? <ContentRouter /> : <LoginRouter />;
};

export default Router;
