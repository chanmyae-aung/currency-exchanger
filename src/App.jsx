import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NavItem from "./components/NavItem";
import Converter from "./components/Converter";
import ContactUs from "./components/ContactUs";
import logo from "./assets/logo.png";
import AboutUs from "./components/AboutUs";
import RealTimeRate from "./components/RealTimeRate";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "styled-components";

export default function App() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const DrawerHeader = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    alignContent: "middle",
    justifyContent: "flex-end",
  }));
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavItem toggleDrawer={toggleDrawer} anchor={anchor}/>
    </Box>
  );
  return (
    <main className=" flex justify-center">
      <Layout className="w-full">
        <Header className="text-primary font-semibold bg-primary fixed top-0 z-10 w-full">
          <div className="md:px-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img className="w-10 " src={logo} alt="" />
              <h2>Fx Portal</h2>
            </div>
            <div className="hidden md:flex">
              <NavItem />
            </div>
            <div className="md:hidden">
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <DrawerHeader>
                      <IconButton onClick={toggleDrawer(anchor, false)}>
                        {/* <ChevronLeftIcon /> */}

                        <ChevronRightIcon />
                      </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Header>
        <Content className="py-10 md:px-20 bg pt-28 mb-16 w-full">
          <Converter />
          <RealTimeRate />
        </Content>
        <section className="flex flex-col gap-20">
          <AboutUs />
          <ContactUs />
        </section>
      </Layout>
    </main>
  );
}
