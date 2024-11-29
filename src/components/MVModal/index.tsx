import { Modal, Image, Text, Box, Divider } from "@mantine/core";
import { MVModalProps } from "./type";
import classes from "./MVModal.module.css";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GetItemResponseType } from "../../types/menu";
import { GET_ITEM } from "../../graphql/queries/itemQuery";

const MVModal = ({
  opened,
  label,
  description,
  imgSrc,
  close,
  itemId,
}: MVModalProps) => {
  // Animation configuration for Framer Motion
  const modalAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const { data } = useQuery<GetItemResponseType>(GET_ITEM, {
    variables: { id: itemId },
  });

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

          <Box>
            <Text>{description}</Text>

            {data?.item.modifierGroups.length !== 0 && (
              <>
                <>
                  <Text mt="sm" fw={600}>
                    Available Add-Ons
                  </Text>
                  <Divider mt="md" />
                </>

                {data?.item.modifierGroups.map((modifierGroup) => {
                  return (
                    <Box mt="sm">
                      <Text>{modifierGroup.label}</Text>
                      <ul>
                        {modifierGroup.modifiers.map((modifier) => {
                          return <li>{modifier.item.label}</li>;
                        })}
                      </ul>
                    </Box>
                  );
                })}
              </>
            )}
          </Box>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default MVModal;
