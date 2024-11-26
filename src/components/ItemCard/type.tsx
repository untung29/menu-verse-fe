export interface ItemCardProps {
  imgUrl: string;
  label: string;
  description: string;
  price: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
