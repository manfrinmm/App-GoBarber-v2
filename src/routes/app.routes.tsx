import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AppointmentCreated from "../pages/AppointmentCreated";
import CreateAppointment from "../pages/CreateAppointment";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="CreateAppointment" component={CreateAppointment} />
    <Auth.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AuthRoutes;
