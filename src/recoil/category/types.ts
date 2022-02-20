export enum CategoryColor {
  PURPLE = 'PURPLE',
  BLUE = 'BLUE',
  PINK = 'PINK',
  LIME = 'LIME',
  RED = 'RED', // 임시 ㅡㅡ
}

export type Category = {
  categoryId: number;
  name: string;
  color: CategoryColor;
};
