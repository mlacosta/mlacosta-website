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

const SIDEBAR_WIDTH = "300px";
const AVATAR_SIZE = "150px";

const SIDEBAR_STYLES = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "primary.dark",
  alignItems: "center",
  height: "100%",
  py: 3,
};

interface SidebarProps {
  menuSections: string[];
}

export const Sidebar = ({ menuSections }: SidebarProps) => (
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
        {MenuItem({ menuSections })}
      </List>
      <Typography>© 2022 Mariano L. Acosta </Typography>
    </Stack>
  </Drawer>
);

const MenuItem = ({ menuSections }: Pick<SidebarProps, "menuSections">) =>
  menuSections.map((section) => (
    <ListItem key={section}>
      <ListItemButton>
        <ListItemText
          primary={constantCase(section)}
          sx={{ textAlign: "center" }}
        />
      </ListItemButton>
    </ListItem>
  ));
