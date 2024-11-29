import { Box, Tabs, Text } from "@mantine/core";
import classes from "./MenuTabPanel.module.css";
import ItemCard from "../ItemCard";
import { MenuType } from "../../types/menu";

const MenuTabPanel = ({ menu }: { menu: MenuType }) => {
  const sortedSections = [...menu.sections].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <Tabs.Panel className={classes.tabPanel} value={menu.id}>
      {sortedSections.map((section) => {
        const isSectionActive = section.detail.state === "active";
        const sortedItems = [...section.detail.items].sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

        return (
          <Box key={section.detail.id} className={classes.sectionContainer}>
            <Box className={classes.sectionTitleContainer}>
              <Text
                style={{ opacity: !isSectionActive ? 0.5 : 1 }}
                size="2rem"
                fw={600}
                ta="left"
              >
                {section.detail.label}
              </Text>

              <Text
                style={{ opacity: !isSectionActive ? 0.5 : 1 }}
                size="1rem"
                fw={500}
                ta="left"
                mt="sm"
              >
                {section.detail.description}
              </Text>

              {!isSectionActive && (
                <Text mt="sm" fw={600} ta="left" c="red">
                  Section is unavailable at the moment. Please try again later
                </Text>
              )}
            </Box>

            <div className={classes.gridContainer}>
              {sortedItems.map((item) => {
                return (
                  <ItemCard
                    id={item.detail.id}
                    disabled={!isSectionActive}
                    key={item.detail.id}
                    label={item.detail.label}
                    imgUrl={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    }
                    description={item.detail.description}
                    price={item.detail.price}
                    quantity={item.detail.quantity}
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
