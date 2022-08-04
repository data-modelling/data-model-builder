import React from "react";
import { Grid, GridItem, useTheme } from "@chakra-ui/react";

const Header = props => {};

const Footer = props => {};
const Sidebar = props => {};

const Content = props => {};

const Layout = props => {
  const { children, ...rest } = props;
};

Footer.displayName = "LayoutFooter";
Header.displayName = "LayoutHeader";
Sidebar.displayName = "LayoutSidebar";
Content.displayName = "LayoutContent";

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;
Layout.Content = Content;

export default Layout;
