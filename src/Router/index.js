import React, {useState} from 'react';
//Screens
import Content from './contentRouter';
import Login from './loginRouter';
//
const Router = () => {
  const [isSignedIn, setIsSegnedIn] = useState(false);
  return isSignedIn ? <Content /> : <Login />;
};

export default Router;
