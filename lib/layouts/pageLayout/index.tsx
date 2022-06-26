import { Container } from "@mui/material";
import { Sidebar } from "lib/components/sidebar/sidebar";

const MENU_ITEMS = ["home", "about", "resume", "portfolio", "contact"];

interface PageLayoutProps {
  children: JSX.Element;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <Sidebar menuSections={MENU_ITEMS} />
      {children}
    </Container>
  );
}
