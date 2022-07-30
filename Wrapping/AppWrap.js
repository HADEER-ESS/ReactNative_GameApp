import React, {useEffect , useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from "../Navigation/AuthStack";
import AppStack from "../Navigation/AppStack";
import auth from '@react-native-firebase/auth';

export default AppWrap = () => {
    const [user , setUser] = useState(null);
    const [initializing , setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    if(initializing) return null ;

  return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};
