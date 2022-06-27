import type { MenuItem } from "lib/components/Sidebar/types";

const getRouteName = (pathname: string) => pathname.split("/")[1];

interface UpdateItemProps {
  pathname: string;
}

export const updateMenuItems = ({ pathname }: UpdateItemProps) => {
  const currentRoute = getRouteName(pathname);
  return (items: MenuItem[]) =>
    items.map(({ name }, key) => {
      return {
        name,
        isSelected: currentRoute === name || (key === 0 && currentRoute === ""),
      };
    });
};
