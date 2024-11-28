export interface MenuType {
  endDate?: string;
  id: string;
  label: string;
  sections: Array<{ id: string; label: string; items: Array<ItemType> }>;
}

export interface GetMenuResponseType {
  menus: Array<MenuType>;
}

export interface ItemType {
  id: string;
  label: string;
  description: string;
  price: string;
}
