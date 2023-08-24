import React from "react";
import { Layout} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NavItem from "./components/NavItem";
import Converter from "./components/Converter";

export default function App() {
  return (
    <main className=" flex justify-center">
      <Layout>
        <Header className="text-white bg-cyan-700 flex justify-between">
          <div>LOGO</div>
          <NavItem />
        </Header>
        <Content className="p-10">
          <Converter/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </main>
  );
}
