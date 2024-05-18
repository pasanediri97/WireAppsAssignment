export enum StockStatus {
  IN_STOCK = "IN STOCK",
  OUT_OF_STOCK = "OUT OF STOCK",
}

enum Colour {
  BLUE = "blue",
  MULTICOLOURED = "multicoloured",
  BLACK = "black",
  PURPLE = "purple",
  GREEN = "green",
  YELLOW = "yellow",
}

interface Price {
  amount: string;
  currency: string;
}

export interface Shoe {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: Price;
  sizes: string[];
  stockStatus: StockStatus;
  colour: Colour;
  description: string;
}

export interface ProductsResponse {
  result: string;
  data: Shoe[];
}