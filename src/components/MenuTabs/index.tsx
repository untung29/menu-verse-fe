import { Tabs } from "@mantine/core";
import { Menu } from "./types";

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

      <Tabs.Panel value={menus[0].id}>{menus[0].sections[0].label}</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
};

export default MenuTabs;
