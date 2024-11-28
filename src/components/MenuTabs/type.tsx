export interface MenuType {
  endDate?: string;
  id: string;
  label: string;
  sections: Array<SectionType>;
}

export interface SectionType {
  detail: { id: string; label: string; items: Array<ItemType> };
  displayOrder: number;
}

export interface GetMenuResponseType {
  menus: Array<MenuType>;
}

export interface ItemType {
  detail: { id: string; label: string; description: string; price: string };
  displayOrder: number;
}
