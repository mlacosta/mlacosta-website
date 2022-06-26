import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { constantCase } from "change-case";
import type { MenuItem as MenuItems } from "./types";

const SIDEBAR_WIDTH = "300px";
const AVATAR_SIZE = "150px";

const SIDEBAR_STYLES = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "primary.dark",
  alignItems: "center",
  height: "100%",
  py: 3,
};

interface SidebarProps {
  menuItems: MenuItems[];
  onSelectItem: (value: string) => void;
}

export const Sidebar = ({ menuItems, onSelectItem }: SidebarProps) => (
  <Drawer open>
    <Stack divider={<Divider flexItem light />} spacing={2} sx={SIDEBAR_STYLES}>
      <Avatar
        src="./profile-pic.jpeg"
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
      <List
        sx={{
          width: SIDEBAR_WIDTH,
        }}
      >
        {MenuItems({ menuItems, onSelectItem })}
      </List>
      <Typography variant="caption">© 2022 Mariano L. Acosta </Typography>
      {/* <Image src="/mla.svg" height={60} width={80} alt="mla-logo" />*/}
    </Stack>
  </Drawer>
);

const MenuItems = ({
  menuItems,
  onSelectItem,
}: Pick<SidebarProps, "menuItems" | "onSelectItem">) =>
  menuItems.map(({ name, isSelected }) => (
    <ListItem key={name} id={name}>
      <ListItemButton onClick={() => onSelectItem(name)} selected={isSelected} >
        <ListItemText
          primary={constantCase(name)}
          sx={{ textAlign: "center" }}
        />
      </ListItemButton>
    </ListItem>
  ));
