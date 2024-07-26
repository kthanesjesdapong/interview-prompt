export type TProduct = {
  id: number;
  title: string;
  images: string[];
  thumbnail: string;
};

export type ProductDataRes = {
  limit: number;
  products: TProduct[];
  skip: number;
  total: number;
};