import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49166229Navigator from '../features/BlankScreen49166229/navigator';
import Maps166211Navigator from '../features/Maps166211/navigator';
import Add-Item166210Navigator from '../features/Add-Item166210/navigator';
import Maps166206Navigator from '../features/Maps166206/navigator';
import UserProfile166202Navigator from '../features/UserProfile166202/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49166229: { screen: BlankScreen49166229Navigator },
Maps166211: { screen: Maps166211Navigator },
Add-Item166210: { screen: Add-Item166210Navigator },
Maps166206: { screen: Maps166206Navigator },
UserProfile166202: { screen: UserProfile166202Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
