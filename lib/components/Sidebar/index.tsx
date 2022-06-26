import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { constantCase } from "change-case";
import { SIDEBAR_WIDTH } from "lib/theme";
import type { MenuItem as MenuItems } from "./types";

import type { Dispatch, SetStateAction } from "react";

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
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({
  menuItems,
  onSelectItem,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
  
  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("lg")
  );
  return (
    <Drawer
      open={isSidebarOpen}
      BackdropProps={{ invisible: true }}
      ModalProps={{
        onBackdropClick: () => setIsSidebarOpen(!isSmallScreen || false),
      }}
    >
      <Stack
        divider={<Divider flexItem light />}
        spacing={2}
        sx={SIDEBAR_STYLES}
      >
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
      </Stack>
    </Drawer>
  );
};

const MenuItems = ({
  menuItems,
  onSelectItem,
}: Pick<SidebarProps, "menuItems" | "onSelectItem">) =>
  menuItems.map(({ name, isSelected }) => (
    <ListItem key={name} id={name}>
      <ListItemButton onClick={() => onSelectItem(name)} selected={isSelected}>
        <ListItemText
          primary={constantCase(name)}
          sx={{ textAlign: "center" }}
        />
      </ListItemButton>
    </ListItem>
  ));
