import { Tabs } from "@mantine/core";
import MenuTabPanel from "../MenuTabPanel";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./MenuTabs.module.css";
import { GetMenusResponseType } from "../../types/menu";
import { useQuery } from "@apollo/client";
import { GET_MENUS } from "../../graphql/queries/menusQueries";
import Loading from "../Loading";

const MenuTabs = () => {
  const isTabletScreen = useMediaQuery(`(max-width: 998px)`);

  const { loading, error, data } = useQuery<GetMenusResponseType>(GET_MENUS);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <Loading />;
  if (!data || !data.menus.length)
    return (
      <p>Menu is not available at the moment, please try again next time</p>
    );

  return (
    <Tabs
      color="red"
      defaultValue={data.menus[0].id}
      orientation={isTabletScreen ? "horizontal" : "vertical"}
      inverted={isTabletScreen}
      classNames={{
        list: isTabletScreen ? classes.tabListTablet : classes.tabList,
        tabLabel: classes.tabLabel,
        tab: classes.tab,
      }}
    >
      <Tabs.List>
        {data.menus.map((menu) => {
          return (
            <Tabs.Tab key={menu.id} value={menu.id}>
              {menu.label}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>

      {data.menus.map((menu) => {
        return <MenuTabPanel key={menu.id} menu={menu} />;
      })}
    </Tabs>
  );
};

export default MenuTabs;
