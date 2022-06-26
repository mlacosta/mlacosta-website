import { palette } from "lib/theme";
import type { ISourceOptions } from "tsparticles-engine";

export const MENU_ITEMS = [
  { name: "home", isSelected: true },
  { name: "about", isSelected: false },
  { name: "resume", isSelected: false },
  { name: "portfolio", isSelected: false },
  { name: "contact", isSelected: false },
];

export const PARTICLE_OPTIONS: ISourceOptions = {
  background: {
    color: {
      value: palette.primary.main,
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
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
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
