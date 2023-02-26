import { Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from 'lib/theme';

export const Name = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack>
      <Typography variant={isSmallScreen ? 'h3' : 'h1'}>Mariano L. Acosta</Typography>
      <Typography variant="h6">Software Engineer</Typography>
    </Stack>
  );
};
