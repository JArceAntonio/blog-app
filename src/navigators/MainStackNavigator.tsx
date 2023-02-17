import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsersPage from '../pages/UsersPage';
import PostPage from '../pages/PostPage';
import PostsPage from '../pages/PostsPage';
import LanguagesPage from '../pages/LanguagesPage';

const Stack = createStackNavigator();

const MainStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="users" component={UsersPage} />
        <Stack.Screen name="posts" component={PostsPage} />
        <Stack.Screen name="post" component={PostPage} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="languages" component={LanguagesPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
