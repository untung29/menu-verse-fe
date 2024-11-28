import { Tabs } from "@mantine/core";
import { Menu } from "./types";
import MenuTabPanel from "../MenuTabPanel";

const MenuTabs = ({ menus }: { menus: Array<Menu> }) => {
  return (
    <Tabs defaultValue={menus[0].id} orientation="vertical">
      <Tabs.List>
        {menus.map((menu) => {
          return (
            <Tabs.Tab key={menu.id} value={menu.id}>
              {menu.label}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>

      {menus.map((menu) => {
        return <MenuTabPanel menu={menu} />;
      })}
    </Tabs>
  );
};

export default MenuTabs;
