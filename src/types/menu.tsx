export interface MenuType {
  endDate?: string;
  id: string;
  label: string;
  sections: Array<SectionType>;
}

export interface SectionType {
  detail: {
    id: string;
    label: string;
    items: Array<ItemSectionType>;
    state: string;
    description?: string;
  };
  displayOrder: number;
}

export interface GetMenusResponseType {
  menus: Array<MenuType>;
}

export interface ItemSectionType {
  detail: ItemType;
  displayOrder: number;
}

export interface Get {
  item: ItemType;
}

export interface ItemType {
  id: string;
  label: string;
  description: string;
  price: string;
  quantity: number;
  modifierGroups: Array<ModifierGroupType>;
}

export interface ModifierGroupType {
  id: string;
  label: string;
  modifiers: Array<ModifierType>;
}

export interface ModifierType {
  displayOrder: number;
  item: ItemType;
}

export interface GetItemResponseType {
  item: ItemType;
}
