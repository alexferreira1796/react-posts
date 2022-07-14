import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "src/components/Layout";
import Dashboard from "src/pages/Dashboard";
import Exit from "src/components/Exit";

const AppRoutes: React.FC = () => (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="/exit" exact={true} component={Exit} />
      </Switch>
    </Layout>
  );

export default AppRoutes;
