import { Container, Theme, useMediaQuery, IconButton } from "@mui/material";
import { Sidebar } from "lib/components/Sidebar";
import { paramCase } from "change-case";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { PARTICLE_OPTIONS, MENU_ITEMS } from "./constants";
import type { Engine } from "tsparticles-engine";
import { Menu as MenuIcon } from "@mui/icons-material";

import { updateMenuItems } from "./utils";

interface PageLayoutProps {
  children?: JSX.Element;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isScreenSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("lg")
  );

  const { pathname } = useRouter();

  useEffect(() => {
    setMenuItems(updateMenuItems({ pathname }));
  }, [pathname, setMenuItems]);

  useEffect(() => {
    setIsSidebarOpen(!isScreenSmall);
  }, [isScreenSmall, setIsSidebarOpen]);

  const handleSelectItem = (sectionName: string) => {
    Router.push(`/${paramCase(sectionName)}`);
    if (isScreenSmall) setIsSidebarOpen(false);
  };

  const handleToggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <Container>
      <Sidebar
        menuItems={menuItems}
        onSelectItem={handleSelectItem}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Particles init={particlesInit} options={PARTICLE_OPTIONS} />
      {!isSidebarOpen && (
        <IconButton size="large" color="info" onClick={handleToggleMenu}>
          <MenuIcon />
        </IconButton>
      )}
      {children}
    </Container>
  );
}
