import { palette } from 'lib/theme';
import type { ISourceOptions } from 'tsparticles-engine';

export const MENU_ITEMS = [
  { name: 'home', isSelected: true },
  { name: 'about', isSelected: false },
  { name: 'resume', isSelected: false },
  { name: 'portfolio', isSelected: false },
  { name: 'contact', isSelected: false },
];

export const PARTICLE_OPTIONS: ISourceOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: palette.primary.light,
    },
    links: {
      color: palette.primary.light,
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: 'outside',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 500,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'square',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};
