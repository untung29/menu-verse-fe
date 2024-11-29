import { Card, Text, Image, Group, Box } from "@mantine/core";
import { ItemCardProps } from "./type";
import MVModal from "../MVModal";
import { useDisclosure } from "@mantine/hooks";
import MVButton from "../MVButton";
import classes from "./ItemCard.module.css";

const ItemCard = ({
  label,
  imgUrl,
  description,
  price,
  disabled,
  quantity,
}: ItemCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  let btnLabel = "More detail";

  if (quantity == 0) {
    btnLabel = "Sold out";

    // Item is not available at the moment (e.g Section is unavailable, etc..)
  } else if (quantity > 0 && disabled) {
    btnLabel = "Not available";
  }

  return (
    <>
      <Card
        onClick={disabled ? undefined : open}
        style={{
          opacity: disabled ? 0.5 : 1,
        }}
        shadow="lg"
        padding="lg"
        withBorder
      >
        <Card.Section>
          <Image height={300} src={imgUrl} alt={description} />
        </Card.Section>

        <Box py="sm" className={classes.content}>
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
            <MVButton disabled={disabled} onClick={open} label={btnLabel} />
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
