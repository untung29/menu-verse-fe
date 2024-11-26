import { Card, Text, Image, Container } from "@mantine/core";
import { ItemCardProps } from "./type";

const ItemCard = ({ label, imgUrl, description }: ItemCardProps) => {
  return (
    <Card shadow="lg" padding="lg" w="300" withBorder>
      <Card.Section>
        <Image src={imgUrl} alt={description} />
      </Card.Section>

      <Container
        style={{
          marginInline: 0,
        }}
        px="0"
        py="sm"
      >
        <Text ta="left" tt="uppercase" fw={600}>
          {label}
        </Text>
        <Text ta="left" fw={400}>
          {description}
        </Text>
      </Container>
    </Card>
  );
};

export default ItemCard;
