// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
} from "carbon-components-react/lib/components/UIShell";
import NavLogo from "./Assets/Images/Logo.png";
import "./style.css";
const LogoStyle = {
  position: "relative",
  top: "1.53rem"

};
const BLKSVG = {
  fill: "#000"
}
const NavBkg = {
  color: "#000",
  background: "#fff",
  borderBottom: "1px solid #fff",
  flexDirection: 'right'
}

const Nav = () => (
  <div className="container">
    <Header aria-label="Dataset Exchange" style={NavBkg}>
      <HeaderName href="#" prefix="">
        <img style={LogoStyle} src={NavLogo} alt="Dataset Exchange" />
      </HeaderName>
      <HeaderNavigation aria-label={NavLogo}>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search20 style={BLKSVG}/>
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 style={BLKSVG}/>
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 style={BLKSVG}/>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </HeaderNavigation>
    </Header>
  </div>
);

//render(<App />, document.getElementById("root"));
export default Nav;
