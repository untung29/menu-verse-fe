import { Card, Text, Image, Group, Button, Container } from "@mantine/core";
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

      <Container px="0" py="sm">
        <div>
          <Text ta="left" tt="uppercase" fw={600}>
            {label}
          </Text>
          <Text ta="left" fw={400}>
            {description}
          </Text>
        </div>

        <Group pt="lg" justify="space-between">
          <Text ta="left" fw={600}>
            ${price}
          </Text>
          <Button onClick={onClick}>More detail</Button>
        </Group>
      </Container>
    </Card>
  );
};

export default ItemCard;
