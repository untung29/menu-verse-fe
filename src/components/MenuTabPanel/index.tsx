import { Tabs } from "@mantine/core";
import { Menu } from "../MenuTabs/types";

const MenuTabPanel = ({ menu }: { menu: Menu }) => {
  return (
    <Tabs.Panel value={menu.id}>
      {menu.sections.map((section) => {
        return <div>{section.label}</div>;
      })}
    </Tabs.Panel>
  );
};

export default MenuTabPanel;
