import { Card, Text, Image, Group, Button, Box } from "@mantine/core";
import { ItemCardProps } from "./type";
import classes from "./ItemCard.module.css";

const ItemCard = ({
  label,
  imgUrl,
  description,
  price,
  onClick,
}: ItemCardProps) => {
  return (
    <Card shadow="lg" padding="lg" w="300" h="515" withBorder>
      <Card.Section>
        <Image src={imgUrl} alt={description} />
      </Card.Section>

      <Box py="sm">
        <Box>
          <Text ta="left" tt="uppercase" fw={600} lineClamp={1}>
            {label}
          </Text>
          <Text
            ta="left"
            fw={400}
            className={classes.descriptionText}
            lineClamp={3}
          >
            {description}
          </Text>
        </Box>

        <Group pt="lg" justify="space-between">
          <Text ta="left" fw={600}>
            ${price}
          </Text>
          <Button onClick={onClick}>More detail</Button>
        </Group>
      </Box>
    </Card>
  );
};

export default ItemCard;
