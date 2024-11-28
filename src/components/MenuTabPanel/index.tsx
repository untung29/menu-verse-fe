import { Box, Tabs, Text } from "@mantine/core";
import { MenuType } from "../MenuTabs/type";
import classes from "./MenuTabPanel.module.css";
import ItemCard from "../ItemCard";

const MenuTabPanel = ({ menu }: { menu: MenuType }) => {
  return (
    <Tabs.Panel className={classes.tabPanel} value={menu.id}>
      {menu.sections.map((section) => {
        return (
          <Box className={classes.sectionContainer}>
            <Box className={classes.sectionTitleContainer}>
              <Text size="2rem" fw={600} ta="left">
                {section.label}
              </Text>
            </Box>

            <div className={classes.gridContainer}>
              {section.items.map((item) => {
                return (
                  <ItemCard
                    label={item.label}
                    imgUrl={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    }
                    description={item.description}
                    price={item.price}
                  />
                );
              })}
            </div>
          </Box>
        );
      })}
    </Tabs.Panel>
  );
};

export default MenuTabPanel;
