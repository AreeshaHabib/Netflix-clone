import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log("user>>>>>>", user)


  const checkUserExist = async () => {
    const unsubscribe = await onAuthStateChanged(authentication, (userAuth) => {
      console.log('userAuth=========>>>>>', userAuth)
      if (userAuth) {
        console.log(">>>>>>>>>", userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        console.log('error')
        dispatch(logout());
      }
    });


    return unsubscribe;
  }


  useEffect(() => {
    checkUserExist()
  }, []);
  return (
    <div className="app">
      <Router>

        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
