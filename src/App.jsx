import React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NavItem from "./components/NavItem";
import Converter from "./components/Converter";
import ContactUs from "./components/ContactUs";
import logo from "./assets/logo.png";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <main className=" flex justify-center">
      <Layout>
        <Header className="text-primary font-semibold bg-primary fixed top-0 z-10 w-full">
          <div className="px-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-10 " src={logo} alt="" />
              {/* <h1 >CMX</h1> */}
            </div>
            <NavItem />
          </div>
        </Header>
        <Content className="py-10 px-20 bg pt-28">
          <Converter/>
        </Content>
        <section className="flex flex-col gap-20">
          <AboutUs/>
          <ContactUs />
        </section>
      </Layout>
    </main>
  );
}
