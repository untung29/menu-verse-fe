import { Card, Text, Image, Group, Button, Box } from "@mantine/core";
import { ItemCardProps } from "./type";

const ItemCard = ({
  label,
  imgUrl,
  description,
  price,
  onClick,
}: ItemCardProps) => {
  return (
    <Card shadow="lg" padding="lg" w="300" withBorder>
      <Card.Section>
        <Image src={imgUrl} alt={description} />
      </Card.Section>

      <Box py="sm">
        <Text ta="left" tt="uppercase" fw={600}>
          {label}
        </Text>
        <Text ta="left" fw={400}>
          {description}
        </Text>

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
