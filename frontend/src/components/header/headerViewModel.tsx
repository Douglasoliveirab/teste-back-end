import { useState } from "react";
import ProductService from "../../services/product/product.service";
import { CadastroProductRequest } from "../../dtos/product/cadastro-product-dto";

export function HeaderViewModel() {

    const productService = new ProductService()
    const [modal, setModal] = useState<boolean>(false);

    const [formData, setFormData] = useState<CadastroProductRequest>({

        description: "",
        image: "",
        name: "",
        price: 0,
        category: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = () => {
        console.log(modal)
        setModal(!modal);
    };

    const handleCloseModal = (): void => {
        setModal(!modal);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formattedData = {
            description: formData.description,
            image: formData.image,
            name: formData.name,
            price: formData.price,
            category: formData.category,
        };

        const result = await productService.cadastrarProdutos(formattedData);
        window.location.reload();
        return result;
    };



    return {
        modal,
        formData,
        handleClick,
        handleChange,
        handleCloseModal,
        handleSubmit
    }
}