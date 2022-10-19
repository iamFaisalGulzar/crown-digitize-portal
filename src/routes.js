import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Orders from "./views/BlogOverview";
import Payments from "./views/AddNewPost";
import NewOrder from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import UserProfileLite from "./views/UserProfileLite";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/orders" />
  },
  {
    path: "/orders",
    layout: DefaultLayout,
    component: Orders
  },
  {
    path: "/new-order",
    layout: DefaultLayout,
    component: NewOrder
  },
  {
    path: "/payments",
    layout: DefaultLayout,
    component: Payments
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  }
];
