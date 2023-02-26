import { GitHub, LinkedIn, MailOutlined } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

export const ContactIcons = () => (
  <Stack direction="row" position="absolute" bottom={70} right={70}>
    <IconButton href="mailto:marianoacosta.003@gmail.com" target="_blank">
      <MailOutlined />
    </IconButton>
    <IconButton href="https://github.com/mlacosta" target="_blank">
      <GitHub />
    </IconButton>
    <IconButton href="https://www.linkedin.com/in/mariano-leonel-acosta-90589754/" target="_blank">
      <LinkedIn />
    </IconButton>
  </Stack>
);
