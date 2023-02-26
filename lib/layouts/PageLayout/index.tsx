import { Box } from '@mui/material';
import { MAIN_MARGIN, theme } from 'lib/theme';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import { PARTICLE_OPTIONS } from './constants';

interface PageLayoutProps {
  children?: JSX.Element;
}

export function PageLayout({ children }: PageLayoutProps) {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles init={particlesInit} options={PARTICLE_OPTIONS} />
      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="99.5%"
        minHeight="calc(var(--vh, 1vh)*100)"
        m={20}
      >
        <Box
          border={`1px solid ${theme.palette.text.primary}`}
          height={`calc(100vh - ${MAIN_MARGIN});`}
          width={`calc(100% - ${MAIN_MARGIN});`}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
