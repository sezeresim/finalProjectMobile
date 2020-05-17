import React, {useState} from 'react';
//Screens
import Content from './contentRouter';
import Login from './loginRouter';

//Router structure provides the switch between Home Page and Login Page
const Router = () => {
  const [isSignedIn, setIsSegnedIn] = useState(false);

  return isSignedIn ? <Content /> : <Login />;
};

export default Router;
