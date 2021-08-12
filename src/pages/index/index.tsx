import { FC } from "react";
import Layout from "../../layouts/layout";
import BuildingList from "./building_list";

const Index: FC = () => {
  return (
    <Layout title={title}>
      <BuildingList />
    </Layout>
  );
};

export const path = "/";
export const title = "داشبورد";
export default Index;
