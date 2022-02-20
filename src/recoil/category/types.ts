export enum CategoryColor {
  PURPLE = 'PURPLE',
  BLUE = 'BLUE',
  PINK = 'PINK',
  LIME = 'LIME',
}

export type Category = {
  categoryId: number;
  name: string;
  color: CategoryColor;
};
