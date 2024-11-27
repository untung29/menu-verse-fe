import { Button } from "@mantine/core";
import { MVButtonProps } from "./type";

const MVButton = ({ label, onClick, disabled }: MVButtonProps) => {
  return (
    <Button color="red" onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default MVButton;
