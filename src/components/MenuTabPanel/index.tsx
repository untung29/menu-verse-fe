import { Box, Tabs, Text } from "@mantine/core";
import { MenuType } from "../MenuTabs/type";
import classes from "./MenuTabPanel.module.css";
import ItemCard from "../ItemCard";

const MenuTabPanel = ({ menu }: { menu: MenuType }) => {
  const sortedSections = [...menu.sections].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <Tabs.Panel className={classes.tabPanel} value={menu.id}>
      {sortedSections.map((section) => {
        const sortedItems = [...section.detail.items].sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

        return (
          <Box key={section.detail.id} className={classes.sectionContainer}>
            <Box className={classes.sectionTitleContainer}>
              <Text size="2rem" fw={600} ta="left">
                {section.detail.label}
              </Text>
            </Box>

            <div className={classes.gridContainer}>
              {sortedItems.map((item) => {
                console.log(item);
                return (
                  <ItemCard
                    key={item.detail.id}
                    label={item.detail.label}
                    imgUrl={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    }
                    description={item.detail.description}
                    price={item.detail.price}
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
