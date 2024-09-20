import { CadastroProductRequest } from "../../dtos/product/cadastro-product-dto";
import { Product } from "../../dtos/product/product-dto";
import apiService from "../api-service";
class ProductService {
  public async obterTodosProdutos() {
    const response = await apiService.get<Product[]>("/products");
    return response.data;
  }

  public async cadastrarProdutos(data: CadastroProductRequest) {
    const response = await apiService.post<Product>("/products", data);
    if (response.error) {
      return;
    }
    return "cadastrado com sucesso";
  }

  public async atualizarProduto(id: number, data: CadastroProductRequest) {
    const response = await apiService.put<Product>(`/products/${id}`, data);
    if (response.error) {
      return;
    }
    return response.data?.name;
  }

  public async deletarProduto(id: number) {
    const result = await apiService.delete<Product>(`/products/${id}`);
    if (result.error) {
      return;
    }
    return "deltado com sucesso";
  }
}

export default ProductService;
