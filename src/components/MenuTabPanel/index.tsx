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
              <Text size="1.5rem" fw={600} ta="left">
                {section.label}
              </Text>
            </Box>

            <ItemCard
              label={section.items[0].label}
              imgUrl={"https://picsum.photos/200/200"}
              description={section.items[0].description}
              price={section.items[0].price}
            />
          </Box>
        );
      })}
    </Tabs.Panel>
  );
};

export default MenuTabPanel;
