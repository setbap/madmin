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

export const path = "/building-list";
export const title = "لیست ساختمان ها";
export default Index;
