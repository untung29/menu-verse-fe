import { Card, Text, Image, Group, Button, Box } from "@mantine/core";
import { ItemCardProps } from "./type";
import MVModal from "../MVModal";
import { useDisclosure } from "@mantine/hooks";

const ItemCard = ({ label, imgUrl, description, price }: ItemCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card shadow="lg" padding="lg" w="300" h="515" withBorder>
        <Card.Section>
          <Image height={300} src={imgUrl} alt={description} />
        </Card.Section>

        <Box py="sm">
          <Box>
            <Text ta="left" tt="uppercase" fw={600} lineClamp={1}>
              {label}
            </Text>
            <Text ta="left" fw={400} lineClamp={3}>
              {description}
            </Text>
          </Box>

          <Group pt="lg" justify="space-between">
            <Text ta="left" fw={600}>
              ${price}
            </Text>
            <Button onClick={open}>More detail</Button>
          </Group>
        </Box>
      </Card>

      <MVModal
        label={label}
        imgSrc={imgUrl}
        opened={opened}
        close={close}
        description={description}
      />
    </>
  );
};

export default ItemCard;
