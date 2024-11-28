export interface Menu {
  endDate?: string;
  id: string;
  label: string;
  sections: Array<{ id: string; label: string }>;
}

export interface GetMenuResponse {
  menus: Array<Menu>;
}
