import { Tabs } from "@mantine/core";
import { MenuType } from "./type";
import MenuTabPanel from "../MenuTabPanel";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./MenuTabs.module.css";

const MenuTabs = ({ menus }: { menus: Array<MenuType> }) => {
  const isTabletScreen = useMediaQuery(`(max-width: 998px)`);
  return (
    <Tabs
      color="red"
      defaultValue={menus[0].id}
      orientation={isTabletScreen ? "horizontal" : "vertical"}
      inverted={isTabletScreen}
      classNames={{
        list: isTabletScreen ? classes.tabListTablet : classes.tabList,
        tabLabel: classes.tabLabel,
      }}
    >
      <Tabs.List>
        {menus.map((menu) => {
          return [
            <Tabs.Tab key={menu.id} value={menu.id}>
              {menu.label}
            </Tabs.Tab>,
            <Tabs.Tab key={"1"} value={"1"}>
              {menu.label}
            </Tabs.Tab>,
            <Tabs.Tab key={"2"} value={"2"}>
              {menu.label}
            </Tabs.Tab>,
            <Tabs.Tab key={"2"} value={"2"}>
              {menu.label}
            </Tabs.Tab>,
            <Tabs.Tab key={"2"} value={"2"}>
              {menu.label}
            </Tabs.Tab>,
          ];
        })}
      </Tabs.List>

      {menus.map((menu) => {
        return <MenuTabPanel key={menu.id} menu={menu} />;
      })}
    </Tabs>
  );
};

export default MenuTabs;
