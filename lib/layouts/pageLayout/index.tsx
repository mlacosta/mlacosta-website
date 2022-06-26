import { Container } from "@mui/material";
import { Sidebar } from "lib/components/sidebar";
import { paramCase } from "change-case";
import Router from "next/router";
import { useEffect, useState } from "react";

const MENU_ITEMS = [
  { name: "home", isSelected: true },
  { name: "about", isSelected: false },
  { name: "resume", isSelected: false },
  { name: "portfolio", isSelected: false },
  { name: "contact", isSelected: false },
];

interface PageLayoutProps {
  children: JSX.Element;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].name);

  useEffect(() => {
    setMenuItems((items) =>
      items.map(({ name }) => ({ name, isSelected: selectedItem === name }))
    );
  }, [selectedItem, setMenuItems]);

  const handleSelectItem = (sectionName: string) => {
    setSelectedItem(sectionName);
    Router.push(`/${paramCase(sectionName)}`);
  };

  return (
    <Container>
      <Sidebar menuItems={menuItems} onSelectItem={handleSelectItem} />
      {children}
    </Container>
  );
}
