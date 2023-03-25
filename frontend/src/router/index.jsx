// export { default as AuthRouter } from "./AuthRouter";
// export { default as AppRouter } from "./AppRouter";
import React, { useEffect } from "react";

import AuthRouter from "./AuthRouter";
import AppRouter from "./AppRouter";

import { Layout } from "antd";
import Navigation from "@/layout/Navigation/Admin";

import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/auth/selectors";
import NavigationAdmin from "@/layout/Navigation/Admin";
import NavigationFranchise from "@/layout/Navigation/Franchise";

export default function Router() {
  const { isLoggedIn } = useSelector(selectAuth);
  const { current } = useSelector(selectAuth);

  useEffect(() => {
    console.log("isLoggedIn : ", isLoggedIn);
    console.log("current admin: ", current.name);
  }, [isLoggedIn]);

  if (isLoggedIn === false)
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AuthRouter />
      </Layout>
    );
  else if (current.name === "lorem")
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <NavigationAdmin />
        <Layout style={{ minHeight: "100vh" }}>
          <AppRouter />
        </Layout>
      </Layout>
    );
  else
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <NavigationFranchise />
        <Layout style={{ minHeight: "100vh" }}>
          <AppRouter />
        </Layout>
      </Layout>
    );
}

// export default App;
