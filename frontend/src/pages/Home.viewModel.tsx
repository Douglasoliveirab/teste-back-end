/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ProductService from "../services/product/product.service";
import { Product } from "../dtos/product/product-dto";

export function useHomeViewModel() {
    const productService = new ProductService();
    const [products, setProducts] = useState<Product[]>([]);
    const [modalUpdate, setModalUpdate] = useState<boolean>(false);
    const [formData, setFormData] = useState<Product>({
        id: 0,
        description: "",
        image: "",
        name: "",
        price: "",
        category: "",
    });

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productService.obterTodosProdutos();
            if (!data) {
                return;
            }
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleEditProduct = (product: Product): void => {
        setFormData({
            id: product.id,
            description: product.description,
            image: product.image,
            name: product.name,
            price: product.price,
            category: product.category,
        });

        setModalUpdate(true);
    };

    const handleDeleteProduct = async (id: number) => {
        await productService.deletarProduto(id);

        const updatedProducts = await productService.obterTodosProdutos();
        if (updatedProducts) {
            setProducts(updatedProducts);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleCloseModal = (): void => {
        setModalUpdate(!modalUpdate);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formattedData = {
            id: formData.id,
            description: formData.description,
            image: formData.image,
            name: formData.name,
            price: formData.price ? parseFloat(formData.price) : 0,
            category: formData.category,
        };

        const result = await productService.atualizarProduto(formattedData.id, formattedData);

        const data = await productService.obterTodosProdutos();
        if (!data) {
            return;
        }
        setProducts(data);

        setModalUpdate(false);
        return result;
    };

    return {
        formData,
        modalUpdate,
        products,
        handleEditProduct,
        handleDeleteProduct,
        handleSubmit,
        handleCloseModal,
        handleChange
    };
}
