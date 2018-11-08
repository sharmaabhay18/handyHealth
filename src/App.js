import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import Dialogflow from 'react-native-dialogflow';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AppoinmentsScreen from './screens/AppoinmentsScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import VideoCallScreen from './screens/VideoCallScreen';
import InfoScreen from './screens/InfoScreen';
import CustomDrawer from './components/CustomDrawer';
import CallSummaryScreen from './screens/CallSummaryScreen';

const SCREEN_WIDTH = Dimensions.get('window').width / 1.2;
const { persistor, store } = configureStore();

const CustomDrawerComponent = (props) => {
  return <CustomDrawer data={props} />;
};

export default class App extends Component {

  componentWillMount() {
    Dialogflow.setConfiguration('', Dialogflow.LANG_ENGLISH);

    const config = {
   
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
  }


  render() {
Dialogflow.requestEvent('WELCOME', null, r => console.log(r), e => console.log(e));
    const MainNavigation = createStackNavigator({
    init: {
        screen: createBottomTabNavigator({
          Login: LoginScreen,
          Register: RegisterScreen
        }, {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
               const { routeName } = navigation.state;
               let iconName;
               if (routeName === 'Login') {
                 iconName = 'keyboard-arrow-right';
               } else if (routeName === 'Register') {
                 iconName = 'home';
               }
               return <Icon name={iconName} size={30} color={tintColor} />;
            }
          }),
tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: { fontSize: 12 }
    }
        })
    },
  main: {
    screen: createBottomTabNavigator({
       Home: HomeScreen,
       Appoinments: AppoinmentsScreen,
       Doctors: DoctorsScreen,
       MyProfile: MyProfileScreen
    }, {
      navigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ tintColor }) => {
           const { routeName } = navigation.state;
           let iconName;

           if (routeName === 'Home') {
             iconName = 'home-variant';
           } else if (routeName === 'Appoinments') {
             iconName = 'calendar-search';
           } else if (routeName === 'Doctors') {
             iconName = 'doctor';
           } else if (routeName === 'MyProfile') {
             iconName = 'face-profile';
           }
           return <Icon name={iconName} size={30} color={tintColor} type='material-community' />;
        }
      }),
tabBarOptions: {
  activeTintColor: '#39b9f9',
  showIcon: true,
  showLabel: true,
  tabStyle: { marginTop: 5 },
  labelStyle: { fontSize: 12 }
}
    })
  },

  info: {
     screen: createDrawerNavigator({
         Video: VideoCallScreen,
     Info: InfoScreen

     }, { drawerPosition: 'right',
          drawerWidth: SCREEN_WIDTH,
          contentComponent: (props) =>
          <CustomDrawerComponent {...props} /> })
   },
   summary: {
     screen: createStackNavigator({
       CallSummary: CallSummaryScreen
     }, { headerMode: 'none' })
   }
 }, { headerMode: 'none', navigationOptions: { tabBarVisible: false } });
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainNavigation />
      </PersistGate>
      </Provider>
    );
  }
}
