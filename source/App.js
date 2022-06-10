import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Login from './components/Login';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: {
            //   backgroundColor: '#542770',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerShown: false,
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({route}) => ({
              title: route.params.email,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
