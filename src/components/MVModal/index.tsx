import { Modal, Image, Text, Box } from "@mantine/core";
import { MVModalProps } from "./type";
import classes from "./MVModal.module.css";

const MVModal = ({
  opened,
  label,
  description,
  imgSrc,
  close,
}: MVModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={<Text fw={600}>{label}</Text>}
      centered
      size="75%"
    >
      <Box className={classes.container}>
        <Image className={classes.modalImg} src={imgSrc} />

        <Text>{description}</Text>
      </Box>
    </Modal>
  );
};

export default MVModal;
