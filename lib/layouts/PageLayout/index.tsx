import { Container, Theme, useMediaQuery } from "@mui/material";
import { Sidebar } from "lib/components/Sidebar";
import { paramCase } from "change-case";
import Router from "next/router";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { PARTICLE_OPTIONS, MENU_ITEMS } from "./constants";
import type { Engine } from "tsparticles-engine";

interface PageLayoutProps {
  children: JSX.Element;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].name);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  useEffect(() => {
    setMenuItems((items) =>
      items.map(({ name }) => ({ name, isSelected: selectedItem === name }))
    );
  }, [selectedItem, setMenuItems]);

  useEffect(() => {
    setIsSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const handleSelectItem = (sectionName: string) => {
    setSelectedItem(sectionName);
    Router.push(`/${paramCase(sectionName)}`);
  };

  return (
    <Container>
      <Sidebar
        menuItems={menuItems}
        onSelectItem={handleSelectItem}
        isSidebarOpen={isSidebarOpen}
      />
      <Particles init={particlesInit} options={PARTICLE_OPTIONS} />
      {children}
    </Container>
  );
}
