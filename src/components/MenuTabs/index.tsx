import { Tabs } from "@mantine/core";
import { MenuType } from "./type";
import MenuTabPanel from "../MenuTabPanel";

const MenuTabs = ({ menus }: { menus: Array<MenuType> }) => {
  return (
    <Tabs color="red" defaultValue={menus[0].id} orientation="vertical">
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
