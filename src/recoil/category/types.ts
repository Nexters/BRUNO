export enum CategoryColor {
  RED = 'RED',
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
