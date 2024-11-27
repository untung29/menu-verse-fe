import { Modal, Image, Text } from "@mantine/core";
import { MVModalProps } from "./type";

const MVModal = ({
  opened,
  label,
  description,
  imgSrc,
  close,
}: MVModalProps) => {
  return (
    <Modal opened={opened} onClose={close} title="Mrs.kueh">
      <Text>{label}</Text>
      {description}
      <Image src={imgSrc} />
    </Modal>
  );
};

export default MVModal;
