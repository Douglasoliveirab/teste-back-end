import { Product } from "./product/product-dto";

export interface CardProductProps extends Product {
  handleClickEditProduct: (id: number) => void;
  handleClickDeleteProduct: (id: number) => void;
}
