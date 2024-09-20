import React from "react";
import styleCard from "../styles/cardProduct.module.css";
import { CardProductProps } from "../dtos/cardProduct-dto";


export const CardProduct: React.FC<CardProductProps> = ({
    id,
    name,
    description,
    image,
    price,
    handleClickEditProduct,
    handleClickDeleteProduct,
}) => {
    return (
        <div className={styleCard.card}>
            <div className={styleCard["card-img"]}>
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <p>Imagem não disponível</p>
                )}
            </div>
            <div className={styleCard["card-info"]}>
                <p className="text-title">{name}</p>
                <p className="text-body">{description}</p>
                <span className="text-title">{price}</span>
            </div>
            <div className={styleCard["card-footer"]}>
                <div className={styleCard["card-button"]}>
                    <div onClick={() => handleClickEditProduct(id)} className="flex items-center">
                        Editar
                    </div>
                </div>
                <div className={styleCard["card-button"]}>
                    <div onClick={() => handleClickDeleteProduct(id)} className="flex items-center">
                        Excluir
                    </div>
                </div>
            </div>
        </div>
    );
};
