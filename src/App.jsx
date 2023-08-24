import React from "react";
import { Layout} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NavItem from "./components/NavItem";
import CurrencyLists from "./components/CurrencyLists";
import Convert from "./components/Convert";
import Converter from "./components/Converter";

export default function App() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <Layout>
        <Header className="text-white bg-cyan-700 flex justify-between">
          <div>LOGO</div>
          <NavItem />
        </Header>
        <Content className="p-10">
          <Converter/>
          <CurrencyLists/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </main>
  );
}
