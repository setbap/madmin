import { FC } from "react";
import Layout from "../../layouts/layout";
import UsersListTable from "./users";

const UsersList: FC = () => {
  return (
    <Layout title={title}>
      <UsersListTable />
    </Layout>
  );
};

export const path = "/users-list";
export const title = "لیست کاربران";
export default UsersList;
