import { Router, Route } from "react-router-dom";
import { history } from "./utils/utils";
import Dashboard, { path as DashboardPath } from "./pages/index";
import BuildingList, { path as BuildingListPath } from "./pages/building_list";
import Login, { path as LoginPath } from "./pages/login/login";
import UsersList, { path as UsersListPath } from "./pages/users_list";

function App() {
  return (
    <Router history={history}>
      <Route exact path={DashboardPath}>
        <Dashboard />
      </Route>
      <Route exact path={BuildingListPath}>
        <BuildingList />
      </Route>
      <Route exact path={UsersListPath}>
        <UsersList />
      </Route>
      <Route exact path={LoginPath}>
        <Login />
      </Route>
    </Router>
  );
}
export default App;
