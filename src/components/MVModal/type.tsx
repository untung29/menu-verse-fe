export interface MVModalProps {
  label: string;
  description?: string;
  imgSrc: string;
  opened: boolean;
  close: () => void;
}
