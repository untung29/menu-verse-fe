import { Modal, Image, Text, Box } from "@mantine/core";
import { MVModalProps } from "./type";
import classes from "./MVModal.module.css";
import { motion } from "framer-motion";

const MVModal = ({
  opened,
  label,
  description,
  imgSrc,
  close,
}: MVModalProps) => {
  // Animation configuration for Framer Motion
  const modalAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={<Text fw={600}>{label}</Text>}
      centered
      size="75%"
    >
      <motion.div
        initial={modalAnimation.initial}
        animate={modalAnimation.animate}
        exit={modalAnimation.exit}
        transition={modalAnimation.transition}
      >
        <Box className={classes.container}>
          <Image className={classes.modalImg} src={imgSrc} />

          <Text>{description}</Text>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default MVModal;
